import Button from '@mui/material/Button';
import Link from 'next/link';

export const Footer = () => {
	return (
		<div className='fixed bottom-0 w-full p-5 bg-black'>
			<div className='md:max-w-screen-2xl mx-4 flex items-center w-full'>
				<div className='md:block md:w-auto flex items-center w-full'>
					<div className='space-x-4 md:block md:w-auto flex items-center w-full'>
						<Button
							sx={{
								'&:hover': {
									backgroundColor: '#8729D0',
								},
							}}
							variant='text'
							color='error'>
							<Link
								href='https://github.com/ToothlessBrush/AstroMonkey-Bot/blob/main/Privicy-Policy.md'
								target='_blank'
								className='text-white'>
								Privacy Policy
							</Link>
						</Button>
						<Button
							sx={{
								'&:hover': {
									backgroundColor: '#8729D0',
								},
							}}
							variant='text'
							color='error'>
							<Link
								href='https://github.com/ToothlessBrush/AstroMonkey-Bot/blob/main/Terms-of-Service.md'
								target='_blank'
								className='text-white'>
								Terms of service
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
