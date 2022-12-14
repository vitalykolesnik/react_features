import { placeholderApi } from "api/api";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    placeholderApi.getPost(Number(id)).then((res) => {
      setPost(res);
    });
  }, [id]);

  const goBack = () => navigate(-1);

  return (
    <div className="py-4">
      {post ? (
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
  );
};
