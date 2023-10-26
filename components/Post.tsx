import { FC } from "react";

interface PostProps {
  post: {
    title: string;
    content: string;
  };
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="col-md-4">
      <h1>{post.title}</h1>
      <p>{post.content?.replace(/<[^>]+>/g, "")}</p>
      <button className="btn btn-secondary mb-3">View Details »</button>
    </div>
  );
};

export default Post;
