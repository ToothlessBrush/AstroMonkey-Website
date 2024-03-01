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
import { Meteors } from "../components/ui/meteors";

export default function Home() {
	return (
        <div>
          {/* Meaty part - Meteor effect */}
          <Meteors number={100} />
        </div>
    )
}