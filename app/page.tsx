// import styles from './star-field.css';
// import { Footer } from '../components/footer';
// import { NavBar } from '../components/navbar';

// export default function Page() {
// 	return (
// 		<div>
// 			{/* <NavBar /> */}
//             <div className={'bg'}>
// 				<div className='star-field'>
// 					<div className='layer'></div>
// 					<div className='layer'></div>
// 					<div className='layer'></div>
// 				</div>
// 			</div>
// 			{/* <Footer /> */}
// 		</div>
// 	);
// }
import styles from '../styles/star-field.module.css';

export default function Home() {
	return (
		<div className={styles.customBody}>
			<div className={styles.customBody}>
				<div className={styles.bg}></div>

				<div className={styles['star-field']}>
					<div className={styles.layer}></div>
					<div className={styles.layer}></div>
					<div className={styles.layer}></div>
				</div>
			</div>
		</div>
	);
}