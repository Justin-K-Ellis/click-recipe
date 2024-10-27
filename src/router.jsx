import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Container from "./components/Container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Container />,
      },
    ],
  },
]);

export default router;
