import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store/store.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
