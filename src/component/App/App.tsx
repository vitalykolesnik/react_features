import { Navigate, Route, Routes } from "react-router-dom";
import { Counter } from "component/Counter/Counter";
import { Camera } from "component/Cam/Camera";
import { VideoPlaylist } from "component/VideoPlayer/VideoPlaylist";
import { Layout } from "component/App/Layout";
import { Posts } from "component/Posts/Posts";
import { Post } from "component/Posts/Post";
import { EditPost } from "component/Posts/EditPost";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Counter />} />
          <Route path="film" element={<VideoPlaylist />} />
          <Route path="web" element={<Camera />} />
          <Route path="web-cam" element={<Navigate to={"/web"} replace />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="*" element={<>Not found</>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
