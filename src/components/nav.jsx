import {CgNametag} from 'react-icons/cg';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi'
import { useState } from 'react';
const nav = () => {

const [toggle, setToggle] = useState(false);

function openMenu(){
    setToggle(true);

}
 function closeMenu(){
    setToggle(false);
 }

  return (
    <>
        <div className="flex items-center justify-between p-10 lg:flex-row text-black">
            <div className=""><a href="#" className="text-white font-mono text-2xl tracking-wider flex items-center lg:flex-row"><CgNametag/>PORTFOLIO</a></div>
            <div className="space-x-4">
                <div className='ssm:hidden lg:block space-x-2'>
                <a href="#" className="text-black hover:bg-white rounded-full  px-3 py-1 text-xl">Home</a>

                <a href="#" className="text-black hover:bg-white rounded-full  px-3 py-1 text-xl">Skills</a>
                <a href="#" className="text-black hover:bg-white rounded-full  px-3 py-1 text-xl">Projects</a>
                                <a href="#" className="text-black hover:bg-white rounded-full  px-3 py-1 text-xl">Testimonial</a>
                <a href="#" className="text-black hover:bg-white rounded-full  px-3 py-1 text-xl">Contact</a>
                </div>
                <div  className='ssm:block lg:hidden'>
                    {toggle ? (
                        <AiOutlineClose  onClick = {closeMenu} size={30} className='text-white cursor-pointer'/>
                    ):(<HiMenuAlt1  onClick = {openMenu} size={30} className='text-white'/>)}
                    
                </div>
            </div>
        </div>
        <div className='ssm:block lg:hidden'>
        {toggle ? (
            <div className='flex justify-between ml-10'>
                <ul>
                    <li className='text-black hover:bg-indigo-50 rounded-full text-xl mb-2 cursor-pointer'>About</li>
                    <li className='text-black hover:bg-indigo-50 rounded-full text-xl mb-2 cursor-pointer'>Skills</li>
                    <li className='text-black hover:bg-indigo-50 rounded-full text-xl mb-2 cursor-pointer'>Projects</li>
                    <li className='text-black hover:bg-indigo-50 rounded-full text-xl mb-2 cursor-pointer'>Contact Me</li>
                </ul>
            </div>
        ):(
            <div></div>
        )}
            
        </div>
    </>
  )
}

export default nav
