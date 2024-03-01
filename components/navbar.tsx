import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
export const NavBar = () => {
	return (
		<div className='fixed top-0 w-full h-20 border-b shadow-sm flex items-center justify-center'>
			<div className='flex items-center justify-between w-full px-10 text-3xl'>
				<div className='flex'>
					<Image
						src='/vercel.svg'
						alt=''
						width={30}
						height={30}
					/>
				</div>

				<div className='flex items-center justify-between  w-[50vw]'>
					<button className='uppercase'>
						<Link
							href='/donate'
							className='text-white'>
							Donate
						</Link>
					</button>
					<button className='uppercase'>
						<Link
							href='dashboard'
							className='text-white'>
							Dashboard
						</Link>
					</button>
					<button className='uppercase'>
						<Link
							href='faqs'
							className='text-white'>
							FAQs
						</Link>
					</button>
				</div>

				<div className='flex items-right rounded'>
					<Image
						className='rounded-2xl'
						src='/default-user.jpg'
						alt=''
						width={30}
						height={30}
					/>
				</div>
			</div>
		</div>
	);
};
