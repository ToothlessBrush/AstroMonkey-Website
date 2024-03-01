import styles from '@/styles/star-field.module.css';
import { Button } from '@mui/material';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';
import Discord from '@/components/discord';
import Invite from '@/components/invite';
import { Meteors } from '@/components/ui/meteors';

export default function Home() {
	return (
		<div>
			<Meteors number={30} />
			<div className={styles.bg}>
				<NavBar />
				<div className='flex flex-col items-center justify-center'>
					<div className='text-white flex flex-col items-center justify-center h-screen mt-[-9vh]'>
						<div className='mb-5 text-8xl text-center'>
							WELCOME TO ASTROMONKEY
						</div>
						<div className='text-4xl w-2/5 text-center'>
							An open-source music bot that has support for Auto
							completion, search using Slash Commands, Queue
							management, and creating/using playlists.
							<div />
							<div className='text-white flex justify-center space-x-8 rounded mt-5'>
								<Button
									sx={{
										'&:hover': {
											backgroundColor: '#8729D0',
										},
									}}
									endIcon={<Discord />}
									variant='contained'
									color='success'
									size='large'>
									<Link href='localhost:3001/api/auth/discord'>
										Sign in
									</Link>
								</Button>
								<Button
									sx={{
										'&:hover': {
											backgroundColor: '#8729D0',
										},
									}}
									startIcon={<Invite />}
									variant='contained'
									size='large'>
									<Link href='https://discord.com/api/oauth2/authorize?client_id=1046617120408080475&permissions=277062371904&scope=bot%20applications.commands'>
										Invite
									</Link>
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
