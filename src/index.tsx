import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import MyMonth from './routes/Budget';
import Dashboard from './routes/Dashboard';
import Page1 from './routes/Budget';
import Budget from './routes/Budget';
import Spending from './routes/Spending';
import History from './routes/History';
import Settings from './routes/Settings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "budget",
        element: <Budget />,
      },
      {
        path: "spending",
        element: <Spending />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
