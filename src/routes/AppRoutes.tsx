import { Navigate } from "react-router-dom";
import { AppNavigation } from "@/constants/navigationConstants";
import AppRoot from "@/pages/AppPages/layout/AppRoot";
import Home from "@/pages/AppPages/Home";
import Services from "@/pages/AppPages/Services";
import Contact from "@/pages/AppPages/Contact";
import About from "@/pages/AppPages/About";

const AppRoutes = [
  {
    path: AppNavigation.Home,
    element: <AppRoot />,
    children: [
      {
        path: AppNavigation.Home,
        element: <Home />,
      },
      {
        path: AppNavigation.Services,
        element: <Services />,
      },
      {
        path: AppNavigation.Contact,
        element: <Contact />,
      },
      {
        path: AppNavigation.About,
        element: <About />,
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default AppRoutes;
