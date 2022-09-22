import { useEffect, useState } from "react";
import "./style.css";
import { baseUrl } from "../../api";
import { NavLink } from "react-router-dom";
import FullScreenLoading from "../../components/FullScreenLoading";

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => setBlogData(res.products))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <FullScreenLoading />;

  return (
    <div className="blogPageWrapper">
      {blogData &&
        blogData.map((value) => {
          return (
            <div className="blog" key={'blogPageWrapper' + Math.random()}>
              <h1>
                <NavLink replace to={`/home/blogs/${value.id}`}>{value.title}</NavLink>
              </h1>
              <img className="image" src={value.images[0]} />
            </div>
          );
        })}
    </div>
  );
};

export default BlogPage;
