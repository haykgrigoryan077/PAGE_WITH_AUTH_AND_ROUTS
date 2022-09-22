import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../api";
import FullScreenLoading from "../FullScreenLoading";
import { Pagination } from "antd";

const SingleBlog = () => {
  const params = useParams();
  console.log(params);
  const [singleUserData, setSingleUserData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${baseUrl}/${params.id}`)
      .then((res) => res.json())
      .then((res) => setSingleUserData(res))
      .finally(() => setLoading(false));
  }, []);

  console.log(singleUserData);
  if (loading) return <FullScreenLoading />;


  return (
    <div className="singleBlogWrapper">
      <header className="title">
        <h1>{singleUserData.title}</h1>
      </header>
        <h1>{singleUserData.category}</h1>
      <main>
        <h1>Price - {singleUserData.price + '$'}</h1>
        <img 
            src={singleUserData?.images?.[0]}
        />
        <h3>{singleUserData.description}</h3>
      </main>
    </div>
  );
};

export default SingleBlog;
