import React from 'react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
const FAQsPage = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='flex flex-col items-center mt-[13vh] w-5/6'>
				<div className='text-white text-5xl mb-12 text-center'>
					Fequently Asked Questions
				</div>
				<Accordion
					type='single'
					collapsible
					className='w-5/6 text-white'>
					<AccordionItem value='item-1'>
						<AccordionTrigger className='text-3xl'>
							Is it accessible?
						</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger className='text-3xl'>
							Is it styled?
						</AccordionTrigger>
						<AccordionContent>
							Yes. It comes with default styles that matches
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-3'>
						<AccordionTrigger className='text-3xl'>
							Is it animated?
						</AccordionTrigger>
						<AccordionContent>
							Yes. It's animated by default, but you can disable
							it if you prefer.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default FAQsPage;
