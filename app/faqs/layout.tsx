import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';
import styles from '@/styles/faq-bg.module.css';
const FAQsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.bg}>
			<NavBar />
			<main className=''>{children}</main>
			<Footer />
		</div>
	);
};

export default FAQsLayout;
