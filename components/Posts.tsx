import { getAllPosts } from "../libs/graphqlQueries";
import Post from "./Post";

type Post = {
  id: string;
  title: string;
  content: string;
};

const Posts = async () => {
  const posts = await getAllPosts();

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
