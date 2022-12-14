import { placeholderApi } from "api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostType } from "component/Posts/Post";

export const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Array<PostType>>([]);

  useEffect(() => {
    placeholderApi.getPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  const postList = posts.map((p: any) => (
    <Link to={`${p.id}`} key={p.id}>
      <li className="px-4 text-left">
        {p.id}. {p.title}
      </li>
    </Link>
  ));

  return (
    <>
      <p className="py-4 text-2xl font-bold underline">Posts</p>
      {posts ? <ul>{postList}</ul> : ""}
    </>
  );
};
