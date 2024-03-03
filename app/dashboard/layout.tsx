import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';
import styles from '@/styles/star-field.module.css';
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.bg}>
			<NavBar />
			<main className=''>{children}</main>
			
		</div>
	);
};

export default DashboardLayout;
