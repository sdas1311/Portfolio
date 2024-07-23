import React from 'react'
import { PROJECTS } from '../constants'
import { BsGithub, BsGlobe2 } from 'react-icons/bs'
import "../App.css";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div >
            {PROJECTS.map((project, index) => (
                <div key={index} className='flex flex-col md:flex-row justify-between items-center my-10 bg-project rounded-2xl'>
                    <div className='md:w-1/2'>
                        <img src={project.image} alt={project.title} className='w-full h-full object-cover rounded-l-2xl'/>
                    </div>
                    <div className='md:w-1/2 md:pl-10'>
                        <div className='flex flex-row justify-between'>
                            <h2 className='text-2xl font-semibold'>{project.title}</h2>
                            <div className=' flex flex-row space-x-5 p-2'>
                                 <a href={project.source} target='_blank' rel="noreferrer">
                                     <BsGithub className=' h-7 w-7 md:h-8 md:w-8 hover:scale-125' />
                                 </a>
                                 <a href={project.visit} target='_blank' rel="noreferrer">
                                     <BsGlobe2 className={` h-7 w-7 md:h-8 md:w-8 ${project.visit === "" && "hidden"} hover:scale-125`} />
                                 </a>
                            </div>
                        </div>
                        <p className='text-neutral-300 my-4'>{project.description}</p>
                        <div className='flex flex-wrap'>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='bg-neutral-900 text-neutral-300 px-2 py-1 rounded-md mr-2 mb-2'>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects