import { Index } from "./pages/Index";
import { Products } from "./pages/Products";
import { ProductGrid } from "./pages/ProductGrid";
import { Cart } from "./pages/Cart";
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
      path: "/product/:id",
      element: <Products />,
    },

    {
      path: "/cart",
      element: <Cart />,
    },

    {
      path: "/category/:categoryName",
      element: <ProductGrid />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
