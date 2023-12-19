import React from 'react'

const Author = () => {
  return (
    <div>
        <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
				<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
					<img src="https://media.licdn.com/dms/image/D5603AQFi2FIUQubuwQ/profile-displayphoto-shrink_800_800/0/1697126047851?e=1708560000&v=beta&t=mjruxRQKhy9tx2mSZcTvwVljrMpEgxAzKDd6z8xxLUE" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
					<div className="flex flex-col">
						<h4 className="text-lg font-semibold text-center md:text-left">John Nguyen</h4>
						<p className="dark:text-gray-400" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
							Meet the Author: I am a software engineer that has a drive to stay active and healthy. Most of my projects revolve around the betterment of one's lifestyle and habits. Of course, I do have other projects I plan to work on that will be more geared towards game and finance development.
						</p>
					</div>
				</div>
				
			</div>
    </div>
  )
}

export default Author