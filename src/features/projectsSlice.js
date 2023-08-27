import { createSlice } from "@reduxjs/toolkit";
import pokeapi_hero from "../assets/projects/pokeapi/hero_pokeapi.png";
import pokeapi_01 from "../assets/projects/pokeapi/image_01.png";
import pokeapi_02 from "../assets/projects/pokeapi/image_02.png";

import wellDone_01 from "../assets/projects/wellDone/image_01.png";
import wellDone_02 from "../assets/projects/wellDone/image_02.png";
import wellDone_03 from "../assets/projects/wellDone/image_03.png";
import wellDone_04 from "../assets/projects/wellDone/image_04.png";
const initialState = [
  {
    id:1,
    name: "Blog WellDone",
    toggler:false,
    description:
      "Aplicacion web red de blogging , publicacion , edicion , interaccion de contenido de blogs.",
    images: [
      {
        url_image: wellDone_01,
      },
      {
        url_image: wellDone_02,
      },
      {
        url_image: wellDone_03,
      },
      {
        url_image: wellDone_04,
      },
    ],
  },
  {
    id:2,
    name: "ToDo List",
    toggler:false,
    description:
      "Aplicacion web de gestion de tareas, CRUD con un simulador backend.",
    images: [
      {
        url_image: "https://flowbite.com/docs/images/blog/image-1.jpg",
      },
      {
        url_image: "https://flowbite.com/docs/images/blog/image-4.jpg",
      },
    ],
  },

  {
    id:3,
    toggler:false,
    name: "PokeApi",
    description:
      "Aplicacion web con react que permite listar los pokemones de forma paginada usando el api pokeapi y guarda el estado de los pokemones favoritos-",
    images: [
      {
        url_image: pokeapi_hero,
      },
      {
        url_image: pokeapi_01,
      },
      {
        url_image: pokeapi_02,
      },
    ],
  },
];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    update_project:(state,action)=>{
      const project_found = state.find((project) => project.id === action.payload.id);
      const indexProjectFound = state.indexOf(project_found);

      if (indexProjectFound >= 0) {
        state[indexProjectFound] = action.payload;
      }
    }
  },
});

export const {update_project} = projectsSlice.actions

export default projectsSlice.reducer;
