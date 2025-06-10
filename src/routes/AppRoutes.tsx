import { Navigate } from "react-router-dom";
import { AppNavigation } from "@/constants/navigationConstants";
import AppRoot from "@/pages/AppPages/layout/AppRoot";
import Home from "@/pages/AppPages/Home";

const AppRoutes = [
  {
    path: AppNavigation.Home,
    element: <AppRoot />,
    children: [
      {
        path: AppNavigation.Home,
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default AppRoutes;
