import logo from '../assets/logo3.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa';

const handleMail = () => {
    window.open('mailto:example@example.com');
};

const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/soumya-das-5380a1221/')
}

const handleGit = () => {
    window.open('https://github.com/sdas1311')
}

const handleX = () => {
    window.open('https://x.com/sdas1311')
}

const Navbar = () => {
  return (
   <nav className="mb-20 flex items-center justify-between py-6" >
    <div className=" h-[20%] w-[20%] flex items-center ml-4 ">
        <img src={logo} alt="logo"/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl' >
        <FaEnvelope className="text-white text-2xl mr-4" onClick={handleMail} />
        <FaLinkedin className="text-white text-2xl mr-4" onClick={handleLinkedIn} />
        <FaGithub className="text-white text-2xl mr-4" onClick={handleGit} />
        <FaSquareXTwitter className="text-white text-2xl mr-4" onClick={handleX} />
    </div>
   </nav>

  )
}

export default Navbar