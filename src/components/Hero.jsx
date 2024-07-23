import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import image from '../assets/hero-img.png';
import Resume from '../assets/docs/Resume.pdf';

const Hero = () => {
    const handleDownload = () => {
        window.open(Resume)
    }
return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-2/3'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className="text-3xl font-semibold tracking-tight mb-4 text-white lg:text-5xl md:text-5xl">
                        Hello Everyone !!
                    </h1>
                    <TypeAnimation
                        sequence={[
                            'I am Soumya Das',
                            1000,
                            'I am a Frontend Developer',
                            1000,
                            'I am a Backend Developer',
                            1000,
                            'I am a Fullstack Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-3xl font-semibold tracking-tight text-white bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent lg:text-5xl md:text-5xl"
                        repeat={Infinity}
                    />
                    <p className="mt-8 px-2 text-lg leading-8 text-white font-semibold">
                        Welcome to my Portfolio website.
                    </p>
                    <p className="text-lg px-2 leading-8 text-white font-semibold">
                        Join me on a journey to discover more about me and my works.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <a href="/contact" className="text-sm px-6 py-2 font-semibold leading-6 border-2 border-[#4155D9] bg-[#4155D9] text-white rounded-md hover:border-2 hover:border-gray-300 hover:text-[#4155D9] hover:bg-white">
                            Contact me
                        </a>
                        <button className="text-sm font-bold leading-6 text-white border-2 border-[#F4E9FF] px-6 py-2 rounded-md hover:border-gray-400 hover:text-gray-400"
                        onClick={handleDownload}>
                            My Resume
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/3'>
                <div className="relative mt-6 right-0 lg:mt-1 lg:mb-8 md:mb-12 flex flex-row items-center justify-center">
                    <img
                        className="relative max-w-none rounded-full h-60 lg:h-80"
                        src={image}
                        alt="App screenshot"
                    />
                </div>
            </div>
        </div>
    </div>
);
}

export default Hero