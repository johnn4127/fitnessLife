import React from 'react'

const SpecificHero = () => {
  return (
    <div>
         <div>
            <div>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leadi sm:text-6xl">Sort By the Specific Workout
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12"> You're a person of action! You know what you want but you might not know how to properly do the exercise. Find any exercise in our library of exercises and if that exercise is not here then you just might be an inventor of a new workout!
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img style={{ borderRadius: '10px' }} src="https://i.pinimg.com/originals/a7/78/19/a778193d04758b169fca966fe0655645.gif" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default SpecificHero