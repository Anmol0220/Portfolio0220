import {BsInstagram, BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'
import HeroPic from '../assets/profile.png';
const hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-5 text-white'>I'm</p>
            <h1 className=' text-6xl'>Anmol Kumar</h1>
            <hr/>
            <p className='mt-10 text-slate-300 font-sans'>
                I’m interested in Open Source, Web Development, UI/UX and Programming.
                I would love to talk React.js and Web Development.
                I’m looking to collaborate on any open source platform.
                I am currently focusing on Data Structures and Algorithm in Javascript, Python, Html5, CSS, javascript . A beginner contributor at Open Source.
                I am looking forward to enhance my knowledge by learning new skills and grow in the tech fields.
            </p>
        </div>
        <div className='w-1/3 items-center ssm:w-fit'>
            <img src={HeroPic} alt="profile" width={200} height={200} className='rounded-full   border-8 border-white '/>
        </div>
        <div className='w-1/3 ssm:w-fit'>
            <p className=' text-4xl mb-4'>About Me</p>
            <p className='text-slate-300'>
                Let's build quality in programming ad design with our services.
            </p>
            <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
                Show More...
            </button>
            <div className='flex space-x-12 cursor-pointer'>
                <BsInstagram size={40} className=' border-4 hover:border-purple-800 rounded-full'/>
                <BsGithub size={40} className=' border-4 hover:border-purple-800 rounded-full'/>
                <BsTwitter size={40} className=' border-4 hover:border-purple-800 rounded-full'/>
                <BsLinkedin size={40} className=' border-4 hover:border-purple-800 rounded-full'/>
            </div>
            
        </div>
        
    </section>
  )
}

export default hero
