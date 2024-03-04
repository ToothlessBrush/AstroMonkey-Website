import styles from '@/styles/star-field.module.css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';
import Discord from '@/components/discord';
import Invite from '@/components/invite';
import { ShootingStars } from '@/components/ui/shootingStars';
export default function Home() {
	return (
		<div>
			<ShootingStars />
			<div className={styles.bg}>
				<div className={styles.bgOnTop}>
					<NavBar />
					<div className='flex flex-col items-center justify-center'>
						<div className='text-white flex flex-col items-center justify-center h-screen mt-[-7.7825vh]'>
							<div className='mb-5 text-8xl text-center'>
								WELCOME TO ASTROMONKEY
							</div>
							<div className='text-4xl md:3/5 lg:w-3/5 text-center'>
								Control your music in the web
								<div />
								<div className='text-white flex justify-center space-x-8 rounded mt-10'>
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
