import React from 'react'
import avatar from "../assets/photo_avatar.jpg"
import { FaJs ,FaReact,FaNodeJs,FaGitAlt } from "react-icons/fa6";
import { BiLogoTailwindCss ,BiLogoRedux } from "react-icons/bi";
function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hola Soy Jheyson Menéndez</h1>
            <p className="max-w-3xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">Frontend Developer</p>
            
            <a href='#about_me'  type="button" className="cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-3 text-base  text-center">Conóceme</a>
            
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative md:flex md:justify-center ">
            <FaJs className="text-3xl text-yellow-300 animate-bounce  animate-infinite  animate-duration-[3000ms]  animate-delay-1000  animate-ease-in "></FaJs>
<img className="w-60 h-60 p-1 rounded-full ring-2  object-cover object-top ring-gray-300 dark:ring-gray-500" src={avatar} alt="Bordered avatar" />
            <FaReact className="text-4xl text-sky-600 animate-bounce animate-infinite animate-duration-[5000ms] animate-delay-[2000ms] animate-ease-in  "></FaReact>
            <BiLogoTailwindCss className="text-5xl text-sky-600 animate-bounce  animate-infinite animate-duration-[7000ms]  animate-delay-[3000ms] animate-ease-in absolute right-11 bottom-7 "></BiLogoTailwindCss>
            <FaNodeJs className="text-3xl text-green-400 animate-bounce animate-infinite animate-duration-[5000ms] animate-delay-[2000ms] animate-ease-in absolute left-11 bottom-7 "></FaNodeJs>
            <FaGitAlt className="text-3xl  animate-bounce  animate-infinite  animate-duration-[6000ms]  animate-delay-1000  animate-ease-in bottom-[-3rem] text-red-600 absolute "></FaGitAlt>
            <BiLogoRedux className="text-5xl text-purple-900 animate-bounce  animate-infinite animate-duration-[7000ms]  animate-delay-[3000ms] animate-ease-in absolute  left-11 top-20 "></BiLogoRedux>
        </div>                
    </div>
</section>
  )
}

export default Hero