import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom';
import Dashbord from './pages/dashbord/Dashbord.jsx';
import Connexion from './pages/connexion/Connexion.jsx';
import Inscription from './pages/inscription/Inscription';
import toast, { Toaster } from 'react-hot-toast';

// Creation de l'objet Browser router 

const router  = createBrowserRouter(
  [
    {
      path: "/",
      element:<Dashbord/>,
    },
    {
      path: "/connexion",
      element: <Connexion/>,
    },
    
    {
      path: "/inscription",
      element: <Inscription/>
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Toaster />
    <RouterProvider router={router}>


    </RouterProvider>
  </React.StrictMode>
);
