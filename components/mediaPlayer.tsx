import Link from 'next/link';
import { IoIosSkipForward } from 'react-icons/io';
import { IoMdPlayCircle } from 'react-icons/io';
import { IoIosSkipBackward } from 'react-icons/io';
import { CiShuffle } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export const MediaPlayer = () => {
	return (
		<div className='fixed bottom-0 w-full p-6 bg-black '>
			<div className='w-full flex justify-between items-center px-10'>
				<div></div>
				<div className='space-x-7 flex items-center justify-center w-full'>
					<div className='flex items-center justify center'>
						<Button
							variant='ghost'
							className='hover: bg-none'>
							<CiShuffle />
						</Button>

						<Button
							variant='ghost'
							className='hover: bg-none'
							size='icon'>
							<IoIosSkipBackward />
						</Button>
						<Button
							variant='ghost'
							className='hover: bg-none'>
							<IoMdPlayCircle />
						</Button>
						<Button
							variant='ghost'
							className='hover: bg-none'>
							<IoIosSkipForward />
						</Button>
					</div>
				</div>
				<div className='w-full flex items-end justify-center'>
					<Slider
						defaultValue={[50]}
						max={100}
						step={1}
						className='w-[30%] bg-white'
					/>
				</div>
			</div>
		</div>
	);
};
