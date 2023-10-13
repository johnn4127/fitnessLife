import React from 'react'

const EquipmentHero = () => {
    return (
        <div>
            <div>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leadi sm:text-6xl">Sort By Equipment
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12"> Do you have a favorite type of equipment but have run out of ideas on what to do with it? Here are the top ten most popular pieces of equipment that people use at the gym, ranging from barbells to having a partner assist you. There are numerous ways to add variety to your gym routine!
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img style={{ borderRadius: '10px' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d93f9c65397547.5af2fc5f3a71e.gif" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default EquipmentHero