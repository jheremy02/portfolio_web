import { createSlice } from "@reduxjs/toolkit";
import pokeapi_hero from "../assets/projects/pokeapi/hero_pokeapi.png";
import pokeapi_01 from "../assets/projects/pokeapi/image_01.png";
import pokeapi_02 from "../assets/projects/pokeapi/image_02.png";

import wellDone_01 from "../assets/projects/wellDone/image_01.png";
import wellDone_02 from "../assets/projects/wellDone/image_02.png";
import wellDone_03 from "../assets/projects/wellDone/image_03.png";
import wellDone_04 from "../assets/projects/wellDone/image_04.png";

import todo_rtk_01 from "../assets/projects/todo_rtk/image_01.png";
import todo_rtk_02 from "../assets/projects/todo_rtk/image_02.png";
import todo_rtk_03 from "../assets/projects/todo_rtk/image_03.png";
import todo_rtk_04 from "../assets/projects/todo_rtk/image_04.png";

import adm_corp_01 from "../assets/projects/adm_corp/image_01.png";
import adm_corp_02 from "../assets/projects/adm_corp/image_02.png";
import adm_corp_03 from "../assets/projects/adm_corp/image_03.png";
import adm_corp_04 from "../assets/projects/adm_corp/image_04.png";
import adm_corp_05 from "../assets/projects/adm_corp/image_05.png";
import adm_corp_06 from "../assets/projects/adm_corp/image_06.png";

import weather_01 from "../assets/projects/weather_app/image_01.png";
import weather_02 from "../assets/projects/weather_app/image_02.png";
import weather_03 from "../assets/projects/weather_app/image_03.png";
import weather_04 from "../assets/projects/weather_app/image_04.png";

import zizou_shop_01 from "../assets/projects/zizou_shop/image_01.png";
import zizou_shop_02 from "../assets/projects/zizou_shop/image_02.png";
import zizou_shop_03 from "../assets/projects/zizou_shop/image_03.png";
import zizou_shop_04 from "../assets/projects/zizou_shop/image_04.png";
import zizou_shop_05 from "../assets/projects/zizou_shop/image_05.png";
import zizou_shop_06 from "../assets/projects/zizou_shop/image_06.png";
import zizou_shop_07 from "../assets/projects/zizou_shop/image_07.png";


import attendance_01 from "../assets/projects/attendance_qr/image_01.jpeg";
import attendance_02 from "../assets/projects/attendance_qr/image_02.jpeg";
import attendance_03 from "../assets/projects/attendance_qr/image_03.jpeg";
import attendance_04 from "../assets/projects/attendance_qr/image_04.jpeg";
import attendance_05 from "../assets/projects/attendance_qr/image_05.jpeg";
import attendance_06 from "../assets/projects/attendance_qr/image_06.png";
import attendance_07 from "../assets/projects/attendance_qr/image_07.png";
import attendance_08 from "../assets/projects/attendance_qr/image_08.png";
import attendance_09 from "../assets/projects/attendance_qr/image_09.png";
import attendance_10 from "../assets/projects/attendance_qr/image_10.png";

import portfolio_01 from "../assets/projects/portfolio/portfolio_01.png";
import portfolio_02 from "../assets/projects/portfolio/portfolio_02.png";
import portfolio_03 from "../assets/projects/portfolio/portfolio_03.png";
import portfolio_04 from "../assets/projects/portfolio/portfolio_04.png";

import requirement_1 from "../assets/projects/requirements/requirement_1.png";
import requirement_2 from "../assets/projects/requirements/requirement_2.png";
import requirement_3 from "../assets/projects/requirements/requirement_3.png";
import requirement_4 from "../assets/projects/requirements/requirement_4.png";
import requirement_5 from "../assets/projects/requirements/requirement_5.png";
import requirement_6 from "../assets/projects/requirements/requirement_6.png";
import requirement_7 from "../assets/projects/requirements/requirement_7.png";

import lutxo01 from '../assets/projects/lutxo/image_01.png'

import lutxo02 from '../assets/projects/lutxo/image_02.png'

import lutxo03 from '../assets/projects/lutxo/image_03.png'

import lutxo04 from '../assets/projects/lutxo/image_04.png'

import lutxo05 from '../assets/projects/lutxo/image_05.png'

import lutxo06 from '../assets/projects/lutxo/image_06.png'

import lutxo07 from '../assets/projects/lutxo/image_07.png'

const initialState = [
  {
    id: 13,
    name: "Sistema de Facturación Electrónica",
    technologies: ["Javascript", "JQuery", "Bootstrap",'CSS'],
    toggler: false,
    description:
      "Desarrollo frontend de un sistema de ventas con facturación electrónica consumiendo API's construidos con Laravel para el manejo y almacenamiento de datos.",
    images: [
      {
        url_image: lutxo01,
      },
      {
        url_image: lutxo02,
      },
      {
        url_image: lutxo03,
      },
      {
        url_image: lutxo04,
      },
      {
        url_image: lutxo05,
      },
      {
        url_image: lutxo06,
      },
      {
        url_image: lutxo07,
      },
    ],
    links: {
      github: "",
      demo: "https://demo.lutxo.com/"
    }
  },
  {
    id: 2,
    name: "App Web Gastos y Compras",
    technologies: ["React js", "Tailwind css", "React Table"],
    toggler: false,
    description:
      "Desarrollo frontend de una aplicacion web de gestion de compras y gastos, consumiendo API's para el manejo y almacenamiento de datos.",
    images: [
      {
        url_image: adm_corp_01,
      },
      {
        url_image: adm_corp_02,
      },
      {
        url_image: adm_corp_03,
      },
      {
        url_image: adm_corp_04,
      },
      {
        url_image: adm_corp_05,
      },
      {
        url_image: adm_corp_06,
      },
    ],
    links: {
      github: "",
      demo: ""
    }
  },
  {
    id: 3,
    name: "Blog WellDone",
    toggler: false,
    technologies: ["Vanilla JS", "Css", "Express js", "NodeJs", "MongoDB"],
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
    links: {
      github: "https://github.com/jheremy02/Proyecto-final-bootcamp-WellDone",
      demo: ""
    }
  },
  {
    id: 4,
    name: "ToDo List",
    toggler: false,
    technologies: ["React js", "TailwindCss", "Redux Toolkit", "Sparrest js", 'AWS'],
    description:
      "Aplicacion web de gestion de tareas, CRUD con un simulador backend.",
    images: [
      {
        url_image: todo_rtk_04,
      },
      {
        url_image: todo_rtk_01,
      },
      {
        url_image: todo_rtk_02,
      },
      {
        url_image: todo_rtk_03,
      },
    ],
    links: {
      github: "https://github.com/jheremy02/todo_app_rtk",
      demo: "https://taskapp.jheysondev.com/"
    }
  },
  {
    id: 13,
    name: "Sistema de Requerimientos y Compras",
    toggler: false,
    technologies: ["Javascript", "Bootstrap", "API Laravel"],
    description:
      "Sitema web que permite al trabajador de un restaurante requerir insumos para que el administrador luego pase a revisarlos , proceder con la compra y registrarlo en el sistema.",
    images: [
      {
        url_image: requirement_1,
      },
      {
        url_image: requirement_2,
      },
      {
        url_image: requirement_3,
      },
      {
        url_image: requirement_4,
      },
      {
        url_image: requirement_5,
      },
      {
        url_image: requirement_6,
      },
      {
        url_image: requirement_7,
      },
    ],
    links: {
      github: "",
      demo: ""
    }
  },
  {
    id: 6,
    name: "Demo Zizou Shop",
    toggler: false,
    technologies: ["React js", "TailwindCss", "Api Paypal"],
    description:
      "MVP de una tienda virtual con React , conectado al api de Paypal para simular pagos online.",
    images: [
      {
        url_image: zizou_shop_01,
      },
      {
        url_image: zizou_shop_02,
      },
      {
        url_image: zizou_shop_03,
      },
      {
        url_image: zizou_shop_04,
      },
      {
        url_image: zizou_shop_05,
      },
      {
        url_image: zizou_shop_06,
      },
      {
        url_image: zizou_shop_07,
      },
    ],
    links: {
      github: "https://github.com/jheremy02/zizou_shop_react",
      demo: ""
    }
  },
  {
    id: 5,
    toggler: false,
    name: "PokeApi",
    technologies: ["React js", "TailwindCss", "PokeApi"],
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
    links: {
      github: "https://github.com/jheremy02/web_card_pokeApi",
      demo: "https://jheysondev.com/proyects/poke-api/"
    }
  },
  {
    id: 1,
    name: "Weather App Web",
    technologies: ["React js", "TailwindCss", "Api OpenWeather"],
    toggler: false,
    description:
      "App Web para buscar informacion del clima en ciudades del mundo, usando el api OpenWeather.",
    images: [
      {
        url_image: weather_01,
      },
      {
        url_image: weather_02,
      },
      {
        url_image: weather_03,
      },
      {
        url_image: weather_04,
      },
    ],
    links: {
      github: "https://github.com/jheremy02/weather_web_app_react",
      demo: "https://jheysondev.com/proyects/weather-app/"
    }
  },

  {
    id: 7,
    name: "Registro de Asistencia por QR",
    technologies: ["Javascript", "TailwindCss", "PHP"],
    toggler: false,
    description:
      "Implementacion de un modulo web que permita al empleado registrar sus asistencia usando el escaneo con QR",
    images: [
      {
        url_image: attendance_06,
      },
      {
        url_image: attendance_01,
      },
      {
        url_image: attendance_02,
      },
      {
        url_image: attendance_03,
      },
      {
        url_image: attendance_04,
      },
      {
        url_image: attendance_05,
      },
      {
        url_image: attendance_06,
      },
      {
        url_image: attendance_07,
      },
      {
        url_image: attendance_08,
      },
      {
        url_image: attendance_09,
      },
      {
        url_image: attendance_10,
      },
    ],
    links: {
      github: "",
      demo: ""
    }
  },
  {
    id: 12,
    name: "Mi portafolio Web",
    technologies: ["Javascript", "TailwindCss", "React", "Redux Toolkit", 'AWS'],
    toggler: false,
    description:
      "Este portafolio web fue construido por mi, desde su desarrollo hasta subirlo a la nube.",
    images: [
      {
        url_image: portfolio_01,
      },
      {
        url_image: portfolio_02,
      },
      {
        url_image: portfolio_03,
      },
      {
        url_image: portfolio_04,
      },

    ],
    links: {
      github: "https://github.com/jheremy02/portfolio_web",
      demo: ""
    }
  },

];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    update_project: (state, action) => {
      const project_found = state.find(
        (project) => project.id === action.payload.id
      );
      const indexProjectFound = state.indexOf(project_found);

      if (indexProjectFound >= 0) {
        state[indexProjectFound] = action.payload;
      }
    },
  },
});

export const { update_project } = projectsSlice.actions;

export default projectsSlice.reducer;
