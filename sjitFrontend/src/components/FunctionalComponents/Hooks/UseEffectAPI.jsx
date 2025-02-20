import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log("Couldn't read the API", err));
  }, []);
  return (
    <div>
      <h1>This is useEffect example with API call.</h1>
      <h2>
        We are goining to fetch data from JSONPlaceholder and disply the data.
      </h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};
export default UseEffectAPI;
