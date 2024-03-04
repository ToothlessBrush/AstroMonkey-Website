//'use client'
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface navContent {
	name: string;
	href: string;
	order: number;
}
export const NavBar = () => {
	// const pathname = usePathname();
	// const router = useRouter();
	// const [navContent, setNavItem] = useState([
	//     { name: 'Donate', href: '/donate', order: 1 },
	// 	{ name: 'Dashboard', href: '/dashboard', order: 2 },
	// 	{ name: 'FAQs', href: '/faqs', order: 3 },
	// ]);
	// useEffect(() => {
	//     const updateOrder = (path: string) => {
	//         const newNavItem = navContent.map(item => {
	//             if (item.href === path) {
	//                 return {...item, order: 2 };
	//             }
	//             return item;
	//         }).sort((a, b) => a.order - b.order)
	//         setNavItem(newNavItem);
	//     }
	//     updateOrder(router.pathname);
	// }, )
	return (
		<div className='fixed top-0 w-full h-20 border-b shadow-sm flex items-center '>
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

				<div className='flex items-end justify-between w-[50vw]'>
					<Link
						href='/donate'
						className='text-white uppercase hover:underline font-semibold'>
						Donate
					</Link>

					<Link
						href='dashboard'
						className='text-white uppercase hover:underline text-4xl font-semibold'>
						Dashboard
					</Link>

					<Link
						href='faqs'
						className='text-white uppercase hover:underline font-semibold'>
						FAQs
					</Link>
				</div>
				{/* <div className='flex items-center justify-between text-white w-[50vw]'>
                    {navContent.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </div> */}

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
