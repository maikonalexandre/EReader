import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home";
import { Read } from "../pages/read";
import { Config } from "../pages/config";
import { Children } from "react";
import { Container } from "../components/container";

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <Container>
        <Home />
      </Container>
    ),
  },
  {
    path: "read",
    element: (
      <Container>
        <Read />
      </Container>
    ),
  },
  {
    path: "config",
    element: (
      <Container>
        <Config />
      </Container>
    ),
  },
]);
