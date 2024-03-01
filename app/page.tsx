import styles from '../styles/star-field.module.css';
import { Button } from '@mui/material';
import Link from 'next/link';
import { Footer } from '../components/footer';
import { NavBar } from '../components/navbar';

import { Meteors } from '../components/ui/meteors';

export default function Home() {
    return (
		<div>
			<Meteors number={30} />
			<div className={styles.bg}>
				<NavBar />
				<div className='flex flex-col items-center justify-center'>
					<div className='text-white flex flex-col items-center justify-center h-screen mt-[-9vh]'>
						<div className='mb-4'>WELCOME TO ASTROMONKEY</div>
						<div className=''>
							An open-source music bot that has support for Auto
							completion, search using Slash Commands, Queue
							management, and creating/using playlists.
							<div />
							<div className='text-white flex justify-center space-x-4 rounded mt-4'>
								<Button
									sx={{
										'& .MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge css-l0n3bs-MuiButtonBase-root-MuiButton-root':
											{
												backgroundColor: 'white',
											},
										borderColor: 'white',
										'&:hover': {
											backgroundColor: '#8729D0',
										},
									}}
									variant='contained'
									color='success'
									size='large'>
									<Link href=''> Sign in</Link>
								</Button>
								<Button
									sx={{
										'&:hover': {
											backgroundColor: '#8729D0',
										},
									}}
									variant='contained'
									size='large'>
									<Link href=''>Invite</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
