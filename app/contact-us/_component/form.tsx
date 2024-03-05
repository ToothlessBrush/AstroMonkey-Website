'use client';
import React, { FormEvent, useState } from 'react';
const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onFormSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const res = await fetch('api/contact/route', {
				method: 'POST',
				body: JSON.stringify({
					name,
					email,
					message,
				}),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
            });
            if (res.ok) {
				// If the response is successful, you can parse the JSON
				const jsonResponse = await res.json();
				console.log('Success:', jsonResponse);
				// Optionally, provide feedback to the user or redirect
			} else {
				// Handle HTTP errors
				throw new Error('Network response was not ok.');
			}
		} catch (err) {
			console.error('err', err);
        }
        
    };
    
    return (
		<div className='flex flex-col'>
			<form onSubmit={onFormSubmit}>
				<input
					id='name'
					type='text'
					placeholder='John Smith'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					id='email'
					type='email'
					placeholder='JohnSmith@example.com'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					id='message'
					type='text'
					placeholder='Your message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type='submit'>
					submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
