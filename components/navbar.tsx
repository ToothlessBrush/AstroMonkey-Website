import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
export const NavBar = () => {
	return (
		<div className='fixed top-0 w-full h-20 border-b shadow-sm flex items-center'>
			<div className='flex '>
				<Image
					src=''
					alt=''
					width={30}
					height={30}
				/>
			</div>
			<div className=''>
				<Button>
					<Link
						href='/donate'
						className='text-white'>
						Donate
					</Link>
				</Button>
				<Button>
					<Link
						href='dashboard'
						className='text-white'>
						Dashboard
					</Link>
				</Button>
				<Button>
					<Link
						href='faqs'
						className='text-white'>
						FAQs
					</Link>
				</Button>
			</div>
			<div className='flex items-right'>
				<Image
					src='/default-user.jpg'
					alt=''
					width={30}
					height={30}
				/>
			</div>
		</div>
	);
};
