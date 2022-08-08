import React, { useEffect, useState } from 'react';
import { onValue, ref, getDatabase } from "firebase/database";
import { Projeto } from 'interfaces';
import { CardProjeto } from 'components/card';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';
import { Dialog, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';


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

  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const [innerHtmlProject, setInnerHtmlProject] = useState<string | null>(null);
  const [visibleProject, setVisibleProject] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    onValue(
      ref(getDatabase()),
      (snapshot) => {
        const projetos = snapshot.child(resourceName).val();
        console.log(projetos)
        let listaProjetos: Projeto[] = []
        for (const key in projetos) {
          if (Object.prototype.hasOwnProperty.call(projetos, key)) {
            listaProjetos.push(projetos[key] as Projeto);
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
          {(loading ? Array.from(new Array(8)) : projetos).map((it: Projeto | undefined, index) => (
            <CardProjeto
              projeto={it}
              key={index}
              onClick={async () => {
                try {
                  const response = await fetch(`${process.env.PUBLIC_URL}/old_projects/projetos/${it!!.path}/`)
                  setInnerHtmlProject(await response.text())
                  setVisibleProject(true)
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
        {innerHtmlProject && <div dangerouslySetInnerHTML={{ __html: innerHtmlProject,  }} />}
      </Dialog>
    </React.Fragment>

  );
}

export default Projects;