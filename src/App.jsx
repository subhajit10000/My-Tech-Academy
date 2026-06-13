import {RouterProvider} from "react-router-dom";
import Router from "./router/MainRouter.jsx";
export default function App() {
  return (
    <RouterProvider router={Router} />
  )
}
