import React from 'react';
const Hero = () => {
	return (
		<div>
			<section>
				<div style={{ backgroundColor: '#1f2937' }} className="dark:bg-violet-400">
					<div style={{ color: 'white' }} className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
						<h1 style={{ color: 'white' }} className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">Welcome to FitnessLife</h1>
						<h2 style={{ color: 'white' }} className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900"> Discover new workouts and find the workout right for you! There are visual and detailed instructions for each workout!</h2>
					</div>
				</div>
				<img style={{ width: '60vw', height: 'auto' }} src="https://hips.hearstapps.com/hmg-prod/images/multitasking-is-the-easiest-thing-ive-ever-done-royalty-free-image-1665527593.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
			</section>
		</div>
	);
};

export default Hero;
