import React, { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useDispatch, useSelector } from "react-redux";
import FsLightbox from "fslightbox-react";
import { update_project } from "../features/projectsSlice";
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
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
