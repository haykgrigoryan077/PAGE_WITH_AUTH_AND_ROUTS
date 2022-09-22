import Layout from "../components/Layout";
import SingleBlog from "../components/SingleBlog";
import Contact from "../contact";
import AboutPage from "../LayoutComponents/AboutPage";
import BlogPage from "../LayoutComponents/Blog";
import LoginPage from "../LoginPage";

export const routers = [
  {
    path: "/home/blogs",
    element: <BlogPage />,
  },
  {
    path: "/home/about",
    element: <AboutPage />,
  },
  {
    path: "/home/blogs/:id",
    element: <SingleBlog />,
  },
  {
    path: "/home/contact",
    element: <Contact />,
  },
];
