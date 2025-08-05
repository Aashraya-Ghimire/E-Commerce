import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./Component/Cart/Cart.jsx";
// import MainAuth from "./Component/Authentiction/MainAuth.jsx";
import Setting from "./Component/Setting/Setting.jsx";
import Home from "./Home.jsx";
import AddProduct from "./Component/AddProduct/AddProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/setting", element: <Setting /> },
      { path: "/product", element: <AddProduct /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
