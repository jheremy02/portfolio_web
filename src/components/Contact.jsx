import React from "react";
import  logo_linkedin from "../assets/logo_linkedin.png";
import  logo_github from "../assets/logo_github.png";
import logo_gmail from "../assets/logo_gmail.webp";

function Contact() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Contáctame
        </a>
       
        <div className="flex justify-center gap-14 mt-9 flex-wrap">
        <div className="  flex flex-wrap justify-center items-center  gap-4 first-line:mb-6 text-gray-900 dark:text-white">
          <a
            href="#"
            className="block max-w-sm p-5 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          ><img src={logo_linkedin} className="w-12" /></a>

          <a
            href="#"
            className="block max-w-sm p-5 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          ><img src={logo_github} className="w-12" /></a>

          
        </div>
        <div className="flex gap-6">
        <a
            href="#"
            className="block max-w-sm p-5 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          ><img src={logo_gmail} className="w-12" /></a>
          <div className="text-sm mt-9 text-gray-500 sm:text-center dark:text-gray-400">
          <a href="#" className="hover:underline"></a>jheremy26@gmail.com
        </div>
          
        </div>
        </div>
        <div className="text-sm mt-9 text-gray-500 sm:text-center dark:text-gray-400">
          <a href="#" className="hover:underline"></a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
