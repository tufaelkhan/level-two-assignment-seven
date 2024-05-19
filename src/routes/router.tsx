import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import MainLayout from "../components/layout/MainLayout";
import RegisterLayout from "../components/layout/RegisterLayout";
import AllWinterClothsDashboard from "../pages/AllWinterClothsDashboard";
import AllWinterClothsPage from "../pages/AllWinterClothsPage";
import CreateWinterCloths from "../pages/CreateWinterCloths";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import WinterClothDetails from "../pages/WinterClothDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/winter-clothes", element: <AllWinterClothsPage /> },
      { path: "/winter-clothes/:id", element: <WinterClothDetails /> },
    ],
  },
  {
    path: "/auth",
    element: <RegisterLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "all-winter-cloths", element: <AllWinterClothsDashboard /> },
      { path: "create-winter-cloth", element: <CreateWinterCloths /> },
    ],
  },
]);
