import Button from '@mui/material/Button';
import Link from 'next/link';

export const Footer = () => {
	return (
		<div className='fixed bottom-0 w-full p-6 bg-black '>
			<div className='w-full flex justify-between items-center px-10'>
				<div className='space-x-7 flex items-center w-full'>
					<Link
						href='https://github.com/ToothlessBrush/AstroMonkey-Bot/blob/main/Privicy-Policy.md'
						target='_blank'
						className='text-white hover:underline'>
						Privacy Policy
					</Link>
					<Link
						href='https://github.com/ToothlessBrush/AstroMonkey-Bot/blob/main/Terms-of-Service.md'
						target='_blank'
						className='text-white hover:underline'>
						Terms of service
					</Link>
				</div>
				<div className='flex items-end justify-end space-x-4 w-full'>
					<Link
						href='/contact-us'
						className='text-white hover:underline'>
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
};
