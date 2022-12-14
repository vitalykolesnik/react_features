import { placeholderApi } from "api/api";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Post: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = React.useState<PostType | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const handlePost = async (id: number) => {
      setIsLoading(true);
      const post = await placeholderApi.getPost(id);
      setPost(post);
      setIsLoading(false);
    };

    handlePost(Number(id));
  }, [id]);

  const goBack = () => navigate(-1);

  return (
    <>
      <div className="py-4">
        {isLoading ? (
          `Loading post with id: ${id}`
        ) : post ? (
          <section className="text-left px-4">
            <button onClick={goBack}>Go back</button>
            <h4 className="py-4 font-semibold text-xl">{post.title}</h4>
            <p className="py-2">{post.body}</p>
            <Link className="font-bold underline" to={`/posts/${id}/edit`}>
              Edit this post
            </Link>
          </section>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
