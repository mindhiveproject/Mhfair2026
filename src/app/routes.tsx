import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/layout";
import { HomePage } from "./pages/home";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
