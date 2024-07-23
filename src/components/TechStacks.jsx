import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import frontend from '../assets/skills/frontend.png';
import backend from '../assets/skills/backend.png';
import ml from '../assets/skills/machine-learning.png';
import database from '../assets/skills/database.png';

const skillName = [
    { name: "Frontend", image: frontend },
    { name: "Backend" , image: backend},
    { name: "Database", image: database },
    { name: "Machine Learning", image: ml },
  ];

  const SkillsComponent = () => {
    return (
      <div className="skills-container flex flex-wrap justify-center items-center">
        {skillName.map((skill, index) => (
          <div key={index} className="skill-item flex flex-col justify-center items-center text-center p-4">
            <img src={skill.image} alt={skill.name} className="w-10 h-10 object-cover m-2" />
            <p className="text-lg font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
const TechStacks = () => {

    const techStacks = ["vscode", "c", "cpp", "python", "html", "css", "javascript", "typescript", "react", "nextjs", "redux", "bootstrap", "tailwind", "nodejs", "express", "django", "mongodb", "mysql", "aws", "git", "github", "netlify", "vercel", "postman","vite","tensorflow"]

    return (
        <div className=" px-5 lg:px-56 md:px-48 pb-10 pt-12 lg:pt-7 flex flex-col z-10 relative ">
            <h1 className=' z-10 text-center text-white text-2xl lg:text-3xl font-medium m-auto lg:m-0'>My Technical Skills</h1>
            <div className='flex justify-center items-center' >
                <SkillsComponent />     
            </div>
            <div className=' z-10 bg-[#191B54] flex justify-around flex-wrap lg:pl-14 pl-10 lg:py-4 py-3 rounded-3xl mt-5'>
                <AliceCarousel
                    autoPlay
                    autoPlayInterval={800}
                    infinite
                    items={techStacks.length}
                    disableButtonsControls
                    disableDotsControls
                    mouseTracking
                    itemsInSlide={8}
                    responsive={{
                        // copilot complete these sequences
                        0: { items: 1 },
                        170: { items: 2 },
                        350: { items: 3 },
                        550: { items: 4 },
                        750: { items: 5 },
                        950: { items: 6 },
                        1150: { items: 7 },
                        1350: { items: 8 },
                    }} >
                    {
                        techStacks.map((skill, index) => {
                            return (
                                <div key={index} className='mx-2' >
                                    <img src={`https://skillicons.dev/icons?i=${skill}`} alt={`_${skill}`} className=' h-10 lg:h-12' />
                                </div>

                            )
                        })
                    }
                </AliceCarousel>
            </div>
        </div>
    )
}

export default TechStacks
