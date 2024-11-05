import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProposalsPage from "./pages/proposals/ProposalsPage";
import ProposalDetail from "./pages/proposals/ProposalDetail";
import CreateProposal from "./pages/proposals/CreateProposal";
import { Layout } from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProposalsPage />,
      },
    ],
  },
  {
    path: "/proposals/create",
    element: <CreateProposal />,
  },
  {
    path: "/proposals/:id",
    element: <ProposalDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
