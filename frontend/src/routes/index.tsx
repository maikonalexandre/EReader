import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home";
import { Read } from "../pages/read";
import { Config } from "../pages/config";
import { Children } from "react";
import { Window } from "../components/window";

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <Window>
        <Home />
      </Window>
    ),
  },
  {
    path: "read",
    element: (
      <Window>
        <Read />
      </Window>
    ),
  },
  {
    path: "config",
    element: (
      <Window>
        <Config />
      </Window>
    ),
  },
]);
