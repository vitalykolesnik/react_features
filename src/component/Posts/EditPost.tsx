import React from "react";
import { placeholderApi } from "api/api";
import { useParams } from "react-router-dom";
import { PostType } from "component/Posts/Post";

export const EditPost: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState<PostType | null>(null);

  React.useEffect(() => {
    placeholderApi.getPost(Number(id)).then((res) => {
      setPost(res);
    });
  }, [id]);

  return (
    <div className="py-4">
      {post ? (
        <div>
          <textarea
            className="w-full h-10"
            defaultValue={post.title}
          ></textarea>
          <textarea className="w-full h-36" defaultValue={post.body}></textarea>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
