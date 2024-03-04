
import styles from '@/styles/star-field.module.css';
import { Button } from '@/components/ui/button';
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
				<div className={styles.bgOnTop}>
					<NavBar />
					<div className='flex flex-col items-center justify-center'>
						<div className='text-white flex flex-col items-center justify-center h-screen mt-[-7.7825vh]'>
							<div className='mb-5 text-8xl text-center'>
								WELCOME TO ASTROMONKEY
							</div>
							<div className='text-4xl lg:w-2/5 md:3/5 text-center'>
								An open-source music bot that has support for
								Auto completion, search using Slash Commands,
								Queue management, and creating/using playlists.
								<div />
								<div className='text-white flex justify-center space-x-8 rounded mt-5'>
									<Button className='w-[12vh] h-[3vh] hover:bg-purple-950 bg-purple-900 rounded-3xl'>
										<Discord />
										<Link
											href='http://localhost:3001/api/auth/discord'
											className=' text-xl'>
											Sign in
										</Link>
									</Button>
									<Button className='w-[12vh] h-[3vh] hover:bg-purple-950 bg-purple-900 rounded-3xl'>
										<Invite />
										<Link
											href='https://discord.com/api/oauth2/authorize?client_id=1046617120408080475&permissions=277062371904&scope=bot%20applications.commands'
											className=' text-xl'>
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
		</div>
	);
}
