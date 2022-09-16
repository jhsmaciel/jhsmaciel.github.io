import React, { useEffect, useState } from 'react';
import { onValue, ref, getDatabase } from "firebase/database";
import { Project } from 'interfaces';
import { CardProjeto } from 'components/card';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';
import { Dialog, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useNavigate } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ProjetosProps {
  title: string
  resourceName: string
}

const Projects: React.FC<ProjetosProps> = ({ title, resourceName }) => {

  const [projetos, setProjetos] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const [visibleProject, setVisibleProject] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    onValue(
      ref(getDatabase()),
      (snapshot) => {
        const projetos = snapshot.child(resourceName).val();
        let listaProjetos: Project[] = []
        for (const key in projetos) {
          if (Object.prototype.hasOwnProperty.call(projetos, key)) {
            listaProjetos.push(projetos[key] as Project);
          }
        }
        setProjetos(listaProjetos);
        setLoading(false);
      }, 
      (errorObject) => {
        enqueueSnackbar('The read failed: ' + errorObject.name, { variant: 'error' });
        setLoading(false);
      }
    );
  }, [enqueueSnackbar, resourceName]);

  return (
    <React.Fragment>
      <Typography 
        variant="h4"
        component="div"
        style={{ paddingTop: 16, paddingBottom:16, textTransform: "none", color: "transparent" }}
        className="arco-iris"
      >
        { title }
      </Typography>
      <Box>
        <Grid container spacing={2}>
          {(loading ? Array.from(new Array(8)) : projetos).map((it: Project | undefined, index) => (
            <CardProjeto
              projeto={it}
              key={index}
              onClick={async () => {
                try {
                  (console.log(it))
                  if ("old" === it?.type) {
                    window.open(`${process.env.PUBLIC_URL}/old_projects/projetos/${it!!.path}/`, "_self")
                    return;
                  }
                  window.open(process.env.PUBLIC_URL + it!!.path, "_self")
                } catch (e) {
                  let err = e as Error;
                  enqueueSnackbar(err.message, { variant: 'error' });
                }
              }}
            />
          ))}
        </Grid>
      </Box>
      <Dialog
        fullScreen
        open={visibleProject}
        onClose={() => setVisibleProject(false)}
        TransitionComponent={Transition}
      >
        {/* {innerHtmlProject && <div dangerouslySetInnerHTML={{ __html: innerHtmlProject,  }} />} */}
      </Dialog>
    </React.Fragment>

  );
}

export default Projects;
