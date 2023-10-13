import React from 'react'

const MuscleGroupHero = () => {
  return (
    <div>
         <div className="hero-container">
      <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img style={{borderRadius:'10px'}} src="https://cdn.dribbble.com/users/722563/screenshots/2928065/dribble_3.gif" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
    
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl"> Sort by Muscle Groups
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Planning your leg day, but you have no idea what the exercises are called? No need to search for YouTube videos just to find simple leg exercises. With FitnessLife, simply click on any of these buttons, and you'll receive recommended workouts based on the selected muscle. You can also scroll to the bottom of the page for additional recommendations!
			</p>
		</div>
	</div>
</section>
    </div>
    </div>
  )
}

export default MuscleGroupHero