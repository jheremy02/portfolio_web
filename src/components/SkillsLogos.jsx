import React from 'react'
import logo_react from "../assets/logo_react.svg";
import logo_javascript from "../assets/javaScript-logo.png";
import logo_git from "../assets/logo_git.png";
import logo_redux from "../assets/logo_redux.png";
import logo_node from "../assets/logo_node.png";
import logo_tailwindcss from "../assets/logo_tailwindcss.svg";
import logo_html from "../assets/html_logo.svg";
import logo_css from "../assets/logo_css.webp";

function SkillsLogos() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Skills</h2>
        <div className="grid grid-cols-2 gap-6 text-gray-500 sm:gap-6 md:grid-cols-3 lg:grid-cols-8 dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
            <img data-tooltip-target="tooltip-html_logo" className=" w-20 h-20 " src={logo_html} alt="Extra large avatar" />
            <div id="tooltip-html_logo" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Html
    <div className="tooltip-arrow" data-popper-arrow></div>
</div>                     
            </a>
            <a href="#" className="flex justify-center items-center">
            <img data-tooltip-target="tooltip-css_logo" className=" w-20 h-20 " src={logo_css} alt="Extra large avatar" />                     
            <div id="tooltip-css_logo" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Css
    <div className="tooltip-arrow" data-popper-arrow></div>
</div>                                           
            </a>
            <a href="#" className="flex justify-center items-center">
                <img data-tooltip-target="tooltip-react_logo" src={logo_react}  className='w-20 h-20'/> 
                <div id="tooltip-react_logo" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    React
    <div className="tooltip-arrow" data-popper-arrow></div>
</div>                                                           
            </a>

            <a href="#" className="flex justify-center items-center">
            <img  data-tooltip-target="tooltip-javascript_logo" src={logo_javascript}  className='w-20 h-20'/>  
            <div id="tooltip-javascript_logo" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Javascript
    <div className="tooltip-arrow" data-popper-arrow></div>
</div>                                                                             
            </a>
            <a href="#" className="flex justify-center items-center">
                <img data-tooltip-target="tooltip-logo_git" src={logo_git}  className='w-20 h-20'/>   
                <div id="tooltip-logo_git" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Git
    <div className="tooltip-arrow" data-popper-arrow></div>
</div>                                                                             
            </a>
            <a href="#" className="flex justify-center items-center">
            <img  data-tooltip-target="tooltip-logo_redux" src={logo_redux}  className='w-20 h-20'/>
            <div id="tooltip-logo_redux" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Redux
    <div className="tooltip-arrow" data-popper-arrow></div>
</div>                                                                                   
            </a>
            <a href="#" className="flex justify-center items-center">
            <img  data-tooltip-target="tooltip-logo_node" src={logo_node}  className='w-20 h-20'/> 
            <div id="tooltip-logo_node" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Node
    <div className="tooltip-arrow" data-popper-arrow></div>
</div>                                                                                  
            </a>
            <a href="#" className="flex justify-center items-center">
            <img data-tooltip-target="tooltip-logo_tailwindcss" src={logo_tailwindcss}  className='w-20 h-20'/>   
            <div id="tooltip-logo_tailwindcss" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tailwindcss
    <div className="tooltip-arrow" data-popper-arrow></div>
</div>                                                                                
            </a>
        </div>
    </div>
</section>
  )
}

export default SkillsLogos