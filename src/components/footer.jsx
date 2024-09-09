import {BsInstagram, BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'
export default function Footer() {
  return (
    <div className="bg-gray-200 p-4 text-center text-gray-600">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-lg font-bold mb-2">About Me</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div className='flex space-x-12 cursor-pointer'>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 flex-1 items-center">
            <h2 className="text-lg font-bold mb-2">Social Media</h2>
            
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><BsLinkedin size={40} className=' border-4 hover:border-purple-800 rounded-full'/></a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><BsTwitter size={40} className=' border-4 hover:border-purple-800 rounded-full'/></a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><BsInstagram size={40} className=' border-4 hover:border-purple-800 rounded-full'/></a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><BsGithub size={40} className=' border-4 hover:border-purple-800 rounded-full'/></a></li>
            </ul>
            
          </div>
        </div>
        </div>
        <div className="text-center">
          <p className="text-gray-600">&copy; 2024 Anmol Kumar. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}