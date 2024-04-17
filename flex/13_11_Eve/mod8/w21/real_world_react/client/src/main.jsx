import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { SignIn } from './components/SignIn/SignIn.jsx'
import { Main } from './components/Main/Main.jsx'
import { GameSystemProfile } from './components/GameSystemProfile/GameSystemProfile.jsx'
import { ErrorPage } from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Main /> },
      {
        path: '/signin',
        element: <SignIn />,
      },
      { path: '/products/:id', element: <GameSystemProfile />}
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
