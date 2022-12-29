import { Index } from "./pages/Index";
import { Gastronomia } from "./pages/Gastronomia";
import { Cultura } from "./pages/Cultura";
import { Arte } from "./pages/Arte";
import { Contacto } from "./pages/Contacto";
import "./sass/index.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/gastronomia",
      element: <Gastronomia />,
    },

    {
      path: "/cultura",
      element: <Cultura />,
    },

    {
      path: "/arte",
      element: <Arte />,
    },

    {
      path: "/contacto",
      element: <Contacto />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
