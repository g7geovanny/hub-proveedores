
import {createBrowserRouter} from "react-router-dom";

import Principal from "./routes/Principal";
import Factoraje from "./routes/FactorajeVerde";
import Requisitos from "./routes/Requisitos";
import Platicas from "./routes/Platicas";
import Ivms from "./routes/Ivms";
import Precalificacion from "./routes/Precalificacion";
import Rutas from "./routes/Rutas";



const router = createBrowserRouter([
  {

    path: "/",
    element: <Principal />,
    
  },

  {
    path: "/factoraje-verde",
    element: <Factoraje/>
  },

  {
    path: "/requisitos-h&S",
    element: <Requisitos/>
  },

  {
    path: "/platicas-seguridad",
    element: <Platicas/>
  },

  {
    path: "/ivms",
    element: <Ivms/>
  },

  {
    path: "/precalificacion",
    element: <Precalificacion/>
  },

  {
    path: "/rutas",
    element: <Rutas/>
  },
]);

export default router;