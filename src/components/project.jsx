import Project1Img from '../assets/project1.png'
import Project2Img from '../assets/project2.png'

export default function Project() {
  return (
    <div className='bg-white m-20 max-w-full'>
      <h1 className='text-3xl font-bold font-mono mb-4 text-black underline'>Projects</h1>
      <div className='flex flex-row justify-between gap-4 '>
        <div className='w-full md:w-1/2 xl:w-1/3 p-4 md:w-1/2 sm:w-full hover:scale-110 transition duration-300'>
          <div className='bg-white rounded shadow-md p-4 border border-black'>
            <a href="https://project1-website.com" target="_blank" rel="noopener noreferrer">
              <img src={Project1Img} alt='Project 1' className='w-full h-64 object-cover mb-4 ' />
            </a>            <h2 className='text-lg font-bold mb-2'>Project 1: <h1>BOOKWORM & CHILL</h1></h2>
            <p className='text-gray-600'>
            This is an e-commerce website for books. The project uses HTML, CSS, JS for frontend and PHP for backend part of the project.</p>
          </div>
        </div>
        <div className='w-full md:w-1/2 xl:w-1/3 p-4 md:w-1/2 sm:w-full hover:scale-110 transition duration-300'>
          <div className='bg-white rounded shadow-md p-4 border border-black'>
          <a href="https://project1-website.com" target="_blank" rel="noopener noreferrer">
            <img src={Project2Img} alt='Project 2' className='w-full h-64 object-cover mb-4' /></a>
            <h2 className='text-lg font-bold mb-2'>Project 2: <h1>Clone of Website- Lazrave</h1></h2>
            <p className='text-gray-600'>This project is created to understand the basic concept of user-interface part.
            This website is completely made using HTML, CSS, JS. </p>
          </div>
        </div>
      </div>
    </div>
  )
}