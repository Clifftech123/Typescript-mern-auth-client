
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import all components
import Logging from "./components/Account/Logging";
import Password from "./components/Account/Password";
import Register from "./components/Account/Register";
import Profile from "./components/Account/Profile";
import Recovery from "./components/Account/Recovery";
import Reset from "./components/Account/ Reset"
import PageNotFound from "./components/Account/PageNotFound";

function App() {


  /** root al  routes  */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Logging></Logging>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/password",
      element: <Password></Password>,
    },
    {
      path: "/profile",
      element: <Profile></Profile>,
    },
    {
      path: "/recovery",
      element: <Recovery></Recovery>,
    },
    {
      path: "/reset",
      element: <Reset></Reset>,
    },
    {
      path: "*",
      element: <PageNotFound></PageNotFound>,
    },
  ]);



  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
