import React from 'react';
import '@/styles/AnimatedBackground.css'; // Adjust the path as necessary

export const ShootingStars = () => {
	// Generate an array of spans for the animation
	// Adjust the number 11 based on how many spans you want
	const spans = Array.from({ length: 11 }, (_, index) => (
		<span
			key={index}
			className={`span${index + 1}`}
		/>
	));

	return <section>{spans}</section>;
};
