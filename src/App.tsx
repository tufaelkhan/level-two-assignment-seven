import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/router";

export default function App() {
  return <RouterProvider router={routes} />;
}
