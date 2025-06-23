import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { frequentQuestions } from './accordion-data';

export default function FrequentQuestions() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded((prevExpanded) =>
        isExpanded ? [...prevExpanded, panel] : prevExpanded.filter((p) => p !== panel)
      );
    };

  return (
    <Container
      id="faq"
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
        Perguntas frequentes
      </Typography>
      <Box sx={{ width: '100%' }}>
        {frequentQuestions.map((question) => (
          <Accordion
            key={question.id}
            expanded={expanded.includes(question.id)}
            onChange={handleChange(question.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${question.id}d-content`}
              id={`${question.id}d-header`}
            >
              <Typography component="span" variant="subtitle2">
                {question.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Array.isArray(question.details) ? (
                question.details.map((line, index) => (
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
                  {question.details}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}