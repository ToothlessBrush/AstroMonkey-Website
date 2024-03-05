'use server'
import React from 'react'
import ContactForm from './_component/form'

const ContactUsPage = async() => {
  return (
		<div className='flex flex-col items-center justify-center'>
			<div className='text-white flex flex-col items-center justify-center h-screen mt-[-7.7825vh]'>
				<div className='mb-5 text-2xl text-center'>
					<ContactForm />
				</div>
			</div>
		</div>
  );
}

export default ContactUsPage