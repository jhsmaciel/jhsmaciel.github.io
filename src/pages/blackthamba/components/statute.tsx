import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { statuteChapters } from './accordion-data';

export default function Statute() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded((prevExpanded) =>
        isExpanded ? [...prevExpanded, panel] : prevExpanded.filter((p) => p !== panel)
      );
    };

  return (
    <Container
      id="statute"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', },
          textAlign: { sm: 'left' },
        }}
      >
        Estatuto
      </Typography>
      <Box sx={{ width: '100%' }}>
        {statuteChapters.map((chapter) => (
          <Accordion
            key={chapter.id}
            expanded={expanded.includes(chapter.id)}
            onChange={handleChange(chapter.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${chapter.id}d-content`}
              id={`${chapter.id}d-header`}
            >
              <Typography component="span" variant="subtitle2">
                {chapter.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Array.isArray(chapter.details) ? (
                chapter.details.map((line, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    gutterBottom
                    sx={{ maxWidth: { sm: '100%', md: '100%' } }}
                  >
                    {line}
                  </Typography>
                ))
              ) : (
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                >
                  {chapter.details}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}