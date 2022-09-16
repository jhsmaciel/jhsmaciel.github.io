import React, { useEffect, useState } from 'react';
import { onValue, ref, getDatabase } from "firebase/database";
import { Project } from 'interfaces';
import { CardProjeto } from 'components/card';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';
import { Typography } from '@mui/material';

interface ProjetosProps {
  title: string
  resourceName: string
}

const Projects: React.FC<ProjetosProps> = ({ title, resourceName }) => {

  const [projetos, setProjetos] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  function getPathProject (project?: Project): string {
    let path =process.env.PUBLIC_URL
    if ("old" === project?.type) {
        path += "/old_projects/projetos/";
    }
    path += project!!.path
    return path
  }

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
                  const link = getPathProject(it);
                  window.open(link)
                } catch (e) {
                  let err = e as Error;
                  enqueueSnackbar(err.message, { variant: 'error' });
                }
              }}
            />
          ))}
        </Grid>
      </Box>
    </React.Fragment>

  );
}

export default Projects;
