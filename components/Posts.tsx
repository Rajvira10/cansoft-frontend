"use client";
import { FC, useEffect, useState } from "react";
import { getAllPosts } from "../libs/graphqlQueries";
import Post from "./Post";

interface PostsProps {}

type Post = {
  id: string;
  title: string;
  content: string;
};

const Posts: FC<PostsProps> = ({}) => {
  const [posts, setPosts] = useState([]) as any[];
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    const allPosts = await getAllPosts();
    setPosts(allPosts.data.posts.nodes);
  };
  return (
    <div className="container2" style={{ padding: "80px 0 20px 0" }}>
      <ul className="row">
        {posts.map((post: Post) => {
          return <Post post={post} key={post.id} />;
        })}
      </ul>
    </div>
  );
};

export default Posts;
