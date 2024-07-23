import React from 'react'
import { HERO_CONTENT } from '../constants';
import about from '../assets/about.png';
import { IoBookSharp } from 'react-icons/io5';
import college from '../assets/college.jpg';
const About = () => {
return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>
            About
            <span className='text-neutral-500'>Me</span>
        </h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='relative max-w-none rounded-2xl h-60 lg:h-80' src={about} alt='about' />
                </div>
            </div>
            <div className='w-full mt-5 lg:mt-0 lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center lg:justify-start'>
                    <p className='text-lg justify-center leading-8 text-white font-semibold lg:justify-start'>
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap'>
            <div className='w-full mt-5 lg:mt-0 lg:w-1/2 lg:p-8 '>
                <h2 className="text-xl justify-center font-semibold tracking-tight text-white lg:text-3xl md:text-2xl pb-2 lg:pb-5 flex flex-row items-center">
                    <p>EDUCATION</p><IoBookSharp className='text-white inline-block pl-3' size={50} />
                </h2>
                <p className="mt-2 text-lg lg:text-xl leading-8 text-white font-medium lg:font-semibold text-center">
                    Netaji Subhash Engineering College, Kolkata
                </p>
                <p className="mt-2 lg:mt-1 text-lg lg:text-xl leading-8 text-white font-medium lg:font-semibold text-center">
                    Bachelor in Technology in Computer Science and Engineering
                </p>
                <p className="mt-2 lg:mt-1 text-lg lg:text-xl leading-8 text-white font-medium lg:font-semibold text-center">
                    August 2021 - Present
                </p>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='relative max-w-none rounded-2xl h-60 lg:h-80' src={college} alt='about' />
                </div>
            </div>
        </div>
    </div>
);
}

export default About