import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error.jsx";
import Live from "./pages/Live.jsx";
import Movies from "./pages/Movies.jsx";
import Auth from "./pages/admin/Auth.jsx";
import Genre from "./pages/admin/Genre.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AddMovie from "./pages/admin/AddMovie.jsx";
import AddSlider from "./pages/admin/AddSlider.jsx";
import AdMessages from "./pages/admin/AdMessages.jsx";
import News from "./pages/News.jsx";
import Movie from "./pages/Movie.jsx";
import Tables from "./pages/Tables.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: "/live",
    element: <Live />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/table",
    element: <Tables />,
  },
  {
    path: "/movie/:movieId",
    element: <Movies />,
  },
  {
    path: "/movies",
    element: <Movie />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/admin",
    element: <Auth />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/genres",
    element: <Genre />,
  },
  {
    path: "/admin/addmovie",
    element: <AddMovie />,
  },
  {
    path: "/admin/slider",
    element: <AddSlider />,
  },
  {
    path: "/admin/messages",
    element: <AdMessages />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
