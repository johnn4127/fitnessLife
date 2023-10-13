import React from 'react';
const Hero = () => {
  return (
    <div>
      <section style={{width:'100vw'}} className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 style={{fontSize:'5vw'}} className="text-5xl font-bold leading-snug sm:text-6xl">
              Welcome to FitnessLife
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              The place to get right 
              <br className="hidden md:inline lg:hidden" /> and workout
            </p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img style={{width:'100vw'}} src='https://tropeaka.com/cdn/shop/articles/main_image_d517c79f-4ec7-4946-bb5e-db7e80623e85_1080x.jpg?v=1571697737' alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
