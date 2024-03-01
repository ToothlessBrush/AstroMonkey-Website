import styles from '../styles/star-field.module.css';

import { Footer } from '../components/footer';
import { NavBar } from '../components/navbar';

import { Meteors } from '../components/ui/meteors';

export default function Home() {
	return (
        <div className={styles.bg}>
            <NavBar/>
            <Meteors number={100} />
            <Footer/>
		</div>
	);
}
