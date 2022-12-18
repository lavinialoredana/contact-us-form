import { createBrowserRouter } from "react-router-dom";
import App from "../pages/AppPage";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorPageElement: <errorPageElement />,
  },
]);

export default appRouter;