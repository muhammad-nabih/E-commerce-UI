import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About/About.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";

import SidebarProvider from "./contexts/sidebarContext/SidebarContext.jsx";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFoundPage />,
  },

  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NotFoundPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <Provider store={store}>
        <PersistGate loading={"loading..."} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </SidebarProvider>
  </React.StrictMode>
);
