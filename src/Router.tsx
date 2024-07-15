import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { CreateCourse } from "./pages/CreateCourse/CreateCourse";
import { NotFound } from "./pages/NotFound";
import { CoursePage } from "./pages/CoursePage/CoursePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-course",
        element: <CreateCourse />,
      },

      {
        path: "/course/:courseId",
        element: <CoursePage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
