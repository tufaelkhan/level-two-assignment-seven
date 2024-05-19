import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar/Navbar";

export default function RegisterLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
