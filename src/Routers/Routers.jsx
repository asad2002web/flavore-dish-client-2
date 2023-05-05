import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../Pages/Error/Error";
import Blog from "../Pages/Blog/Blog";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://flavore-dish-server-asad2002web-gmailcom.vercel.app/dashes"
          ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
      {
        path: "/dashes/:id",
        element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://flavore-dish-server-asad2002web-gmailcom.vercel.app/dashes/${params.id}`),
      },
      {
        path: "errorpage",
        element: <Error></Error>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
