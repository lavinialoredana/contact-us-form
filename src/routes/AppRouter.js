import { createBrowserRouter } from "react-router-dom";
import App from "../pages/AppPage";
import ErrorPage from "../pages/ErrorPage";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorPageElement: <ErrorPage />,
  },
]);

export default appRouter;