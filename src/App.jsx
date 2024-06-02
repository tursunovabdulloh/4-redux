import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <h1 class="bg-red-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam
        soluta excepturi et nihil possimus.
      </h1>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
      />
    </>
  );
}

export default App;
