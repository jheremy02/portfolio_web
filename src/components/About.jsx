import React from 'react'

import  cvjheyson  from "../assets/cv_jheyson.pdf";

import about_image from "../assets/about_image_02.jpg";
import about_image_02 from "../assets/about_image_03.jpg";



function About() {
  return (
    <section className="bg-white dark:bg-gray-900" id='about_me'>
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sobre Mí</h2>
            <p className="mb-4">Soy Frontend Developer ,  Ingeniero de Sistemas , programador entusiasta por la tecnología y el aprendizaje continuo  con capacidad de análisis y creatividad en la resolución de retos, lector y un autodidacta con ganas de nunca parar de aprender.</p>
            
            <a target='_blank' rel='noreferrer' download href={cvjheyson} ><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Descargar CV
  </span>
</button></a>
            
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg h-4/5 object-cover " src={about_image} alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={about_image_02} alt="office content 2" />
        </div>
    </div>
</section>
  )
}

export default About