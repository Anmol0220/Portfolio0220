import React from 'react';
import { FaPython, FaReact, FaNodeJs, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { SiPhp, SiExpress, SiTailwindcss, SiVisualstudio, SiGithub, SiGit } from 'react-icons/si';

export default function Skill() {
  return (
    <div className="bg-white m-20 max-w-full">
      <div className="grid justify-items-center m-10">
        <h1 className="text-3xl font-bold font-mono mt-10 text-black underline">Skills</h1>
      </div>

      <div className="flex flex-row justify-between gap-4">
        {/* Programming Languages Section */}
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:w-1/2 sm:w-full">
          <div className="bg-white rounded shadow-md p-4 border border-black transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg group">
            <h2 className="text-lg font-bold mb-2">Programming Languages</h2>
            <ul className="list-disc pl-4">
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <FaJsSquare className="text-yellow-400 text-2xl group-hover:text-yellow-500 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-yellow-500">JavaScript</span>
              </li>
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <FaHtml5 className="text-orange-400 text-2xl group-hover:text-orange-500 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-orange-500">HTML/CSS</span>
              </li>
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <SiPhp className="text-blue-400 text-2xl group-hover:text-blue-500 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-blue-500">PHP</span>
              </li>
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <FaPython className="text-blue-600 text-2xl group-hover:text-blue-700 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-blue-700">Python</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Frameworks and Libraries Section */}
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:w-1/2 sm:w-full">
          <div className="bg-white rounded shadow-md p-4 border border-black transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg group">
            <h2 className="text-lg font-bold mb-2">Frameworks and Libraries</h2>
            <ul className="list-disc pl-4">
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <FaReact className="text-blue-400 text-2xl group-hover:text-blue-500 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-blue-500">React</span>
              </li>
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <FaNodeJs className="text-green-400 text-2xl group-hover:text-green-500 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-green-500">Node.js</span>
              </li>
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <SiExpress className="text-gray-400 text-2xl group-hover:text-gray-500 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-gray-500">Express.js</span>
              </li>
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <SiTailwindcss className="text-purple-400 text-2xl group-hover:text-purple-500 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-purple-500">Tailwind CSS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tools and Software Section */}
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:w-1/2 sm:w-full">
          <div className="bg-white rounded shadow-md p-4 border border-black transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg group">
            <h2 className="text-lg font-bold mb-2">Tools and Software</h2>
            <ul className="list-disc pl-4">
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <SiGit className="text-red-400 text-2xl group-hover:text-red-500 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-red-500">Git</span>
              </li>
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <SiGithub className="text-gray-400 text-2xl group-hover:text-gray-500 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-gray-500">GitHub</span>
              </li>
              <li className="flex items-center gap-2 group-hover:scale-110 transition duration-300 ease-in-out">
                <SiVisualstudio className="text-blue-600 text-2xl group-hover:text-blue-700 transition duration-300 ease-in-out" />
                <span className="font-bold group-hover:text-blue-700">Visual Studio Code</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
