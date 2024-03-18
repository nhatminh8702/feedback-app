import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feedback from "./Pages/Feedback/Feedback";
import Question from "./Pages/Question/Question";
import Login from "./Pages/Login/Login";
import UserManagement from "./Pages/UserManagement/UserManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "use-management",
        element: <UserManagement />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
