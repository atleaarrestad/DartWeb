import React from "react";
import ReactDOM from "react-dom/client";
import Spinner from "./components/spinner.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Play from "./pages/play.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Play />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Spinner />} />
  </React.StrictMode>
);
