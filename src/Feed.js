import React,{useState,useEffect} from "react";
import "./Feed.css";
import db from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
import Storyreal from "./Storyreal";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
  }, []);

  return (
    <div className="feed">
      <Storyreal />
      <MessageSender />
      {posts.map((post)=>(

      <Post
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}
      />
      ))}

      <Post
        profilePic="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg"
        message="wow its cool"
        timestamp="timestamp"
        username="Rajdeep kumar"
        image=""
      />

      <Post
        profilePic="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg"
        message="wow its cool"
        timestamp="timestamp"
        username="Rajdeep kumar"
        image="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg"
      />
    </div>
  );
}

export default Feed;
