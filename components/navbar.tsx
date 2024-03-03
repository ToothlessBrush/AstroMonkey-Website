import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
import styles from '@/styles/navbar.module.css';
export const NavBar = () => {
	return (
		<div className='fixed top-0 w-full h-20 border-b shadow-sm flex items-center justify-center'>
			<div className='flex items-center justify-between w-full px-10 text-3xl'>
				<div className='flex'>
					<Link href='/'>
						<Image
							src='/vercel.svg'
							alt=''
							width={30}
							height={30}
                        />
                        
					</Link>
				</div>

				<div className='flex items-center justify-between  w-[50vw]'>
					<button className='uppercase hover:underline font-semibold'>
						<Link
							href='/donate'
							className='text-white'>
							Donate
						</Link>
					</button>
					<button className='uppercase hover:underline text-4xl font-semibold'>
						<Link
							href='dashboard'
							className='text-white'>
							Dashboard
						</Link>
					</button>
					<button className='uppercase hover:underline font-semibold'>
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
