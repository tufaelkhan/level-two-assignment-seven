import { Outlet } from "react-router-dom";
import Footer from "../ui/footer/Footer";
import Navbar from "../ui/navbar/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
