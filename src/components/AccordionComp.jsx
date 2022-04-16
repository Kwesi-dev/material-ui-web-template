import { useState } from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography } from '@mui/material'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const AccordionComp = () => {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Box>
        <Typography variant="h6"component="h6" sx={{color: "#202140", fontWeight: "bold", mb: 1}}>Accordion</Typography>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{fontSize: { xs: "0.9rem", mobile: "1rem"}}}>How to download and register</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography sx={{fontSize: { xs: "0.9rem", mobile: "1rem"}}}>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove right at
                the coast of the Semantics, a large language ocean.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography sx={{fontSize: { xs: "0.9rem", mobile: "1rem"}}}>How to create your paypal account?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography sx={{fontSize: { xs: "0.9rem", mobile: "1rem"}}}>
              Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at
              the coast of the Semantics, a large language ocean.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography sx={{fontSize: { xs: "0.9rem", mobile: "1rem"}}}>How to link your paypal and bank account</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography sx={{fontSize: { xs: "0.9rem", mobile: "1rem"}}}>
              Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at
              the coast of the Semantics, a large language ocean.
            </Typography>
            </AccordionDetails>
        </Accordion>  
    </Box>
  )
}

export default AccordionComp