import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDisplay from "./pages/ProductDisplay";
import ProductForm from "./pages/ProductForm";
import Notification from "./pages/Notification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/createProduct",
    element: <ProductForm />,
  },
  {
    path: "/displayProduct",
    element: <ProductDisplay />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
