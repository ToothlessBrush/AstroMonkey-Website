import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const FAQsPage = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='flex flex-col items-center mt-[13vh] w-5/6'>
				<div className='text-white text-5xl mb-12 text-center'>
					Fequently Asked Questions
				</div>
				<Accordion className='mb-5'>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1-content'
						id='panel1-header'>
						Accordion 1
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion className='mb-5'>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2-content'
						id='panel2-header'>
						Accordion 2
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion className='mb-5'>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel3-content'
						id='panel3-header'>
						Accordion 3
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion className='mb-5'>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel4-content'
						id='panel4-header'>
						Accordion 4
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget.
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
};

export default FAQsPage;
