import React from "react";
import { placeholderApi } from "api/api";
import { PostType } from "component/Posts/Post";
import { ErrorPanel, ErrorType } from "component/App/ErrorPanel";
import { PostPreview } from "./PostPreview";

export const Posts: React.FC = () => {
  const [posts, setPosts] = React.useState<Array<PostType>>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<ErrorType | null>(null);

  React.useEffect(() => {
    handlePosts();
  }, []);

  const handlePosts = async () => {
    try {
      setIsLoading(true);
      const posts = await placeholderApi.getPosts();
      setPosts(posts);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const postList = posts.map((p: any) => <PostPreview {...p} key={p.id} />);

  return (
    <>
      <p className="py-4 text-2xl font-bold underline">Posts</p>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        <ErrorPanel message={error.message} action={handlePosts} />
      ) : posts ? (
        <ul>{postList}</ul>
      ) : (
        ""
      )}
    </>
  );
};
