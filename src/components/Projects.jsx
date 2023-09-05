import React, { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useDispatch, useSelector } from "react-redux";
import FsLightbox from "fslightbox-react";
import { update_project } from "../features/projectsSlice";
import { Link } from "react-router-dom";
function Projects() {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [toggler, setToggler] = useState(false);

  function handle_toggler(project_id) {
    console.log("hello world");
    const project_found = projects.find((project) => project.id == project_id);
    console.log(project_found);
    const projectUpdated = {
      ...project_found,
      toggler: !project_found.toggler,
    };
    dispatch(update_project(projectUpdated));
  }

  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Mis Proyectos
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="hover:animate-jump max-w-sm flex flex-col justify-between  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
            >
              <a className="cursor-pointer ">
                <img
                  className="rounded-t-lg bg-cover object-contain w-full max-h-60 "
                  onClick={() => {
                    handle_toggler(project.id);
                  }}
                  src={project.images[0].url_image}
                />
                {/*
                  <Gallery>
                  {project.images.map((image, index) => (
                    <Item
                      
                      key={`${idx}${index}`}
                      original={image.url_image}
                      width="720"
                     
                      className="rounded-lg object-cover bg-cover"
                    >
                      {({ ref, open }) => (
                        <img

                          className="rounded-t-lg bg-cover object-contain w-full max-h-60 "
                          ref={ref}
                          onClick={open}
                          src={index === 0 ? image.url_image :"" }
                        />
                      )}
                    </Item>
                  ))}
                </Gallery>
                */}

                <FsLightbox
                  key={idx}
                  toggler={project.toggler}
                  type={"image"}
                  sources={project.images.map((image) => image.url_image)}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="w-full flex flex-wrap gap-y-2 mt-4">
                  {project.technologies.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex self-end mt-6">
                  {project.links.github && <Link to={project.links.github} target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="flex text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Github
                  </button>
                  </Link>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
