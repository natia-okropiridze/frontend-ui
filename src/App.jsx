import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/teachers",
          element: <TeachersPage />
        },
        {
          path: "/students",
          element: null
        }
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
