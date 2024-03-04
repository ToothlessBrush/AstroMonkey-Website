import React from 'react'
import styles from '@/styles/faq-bg.module.css';
import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';
const ContactUseLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.bg}>
			<NavBar />
            <main className=''>{children}</main>
            <Footer />
		</div>
	);
};

export default ContactUseLayout