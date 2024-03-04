import React from 'react';
import Image from 'next/image';
const Invite = () => {
	return (
		<div className='mr-2'>
			<Image
				src='/plus.png'
				alt='plus'
				width={20}
				height={20}
			/>
		</div>
	);
};

export default Invite;
