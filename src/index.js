import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Beats from './Components/Beats';
import Me from './Components/Me';
import Posts from './Components/Posts';
import Contact from './Components/Contact';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Beats",
    element: <Beats />,
  },
  {
    path: "/Me",
    element: <Me />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Posts",
    element: <Posts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
