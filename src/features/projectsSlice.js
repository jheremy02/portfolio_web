import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Blog WellDone",
    description:
      "Desarrollo de una aplicacion web el cual consiste en ser una red de blogging , publicacion , edicion , interaccion de contenido de blogs.",
    images: [
      {
        url_image: "https://flowbite.com/docs/images/blog/image-4.jpg",
      },
      {
        url_image: "https://flowbite.com/docs/images/blog/image-1.jpg",
      },
    ],
  },
  {
    name: "ToDo List",
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
];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

//export const {} = projectsSlices.actions

export default projectsSlice.reducer;
