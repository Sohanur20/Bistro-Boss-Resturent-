import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Components/Router/Router.jsx";
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from "./Components/Provider/AuthProvider.jsx";


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={Router} />
    </div>
    </HelmetProvider>
    </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>
);
