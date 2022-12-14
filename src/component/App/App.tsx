import { Navigate, Route, Routes } from "react-router-dom";
import { Counter } from "component/Counter/Counter";
import { Camera } from "component/Cam/Camera";
import { VideoPlaylist } from "component/VideoPlayer/VideoPlaylist";
import { Layout } from "component/App/Layout";
import { Posts } from "component/Posts/Posts";
import { Post } from "component/Posts/Post";
import { EditPost } from "component/Posts/EditPost";
import { LoginPage } from "component/App/LoginPage";
import { RequireAuth } from "hoc/RequireAuth";

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
          <Route
            path="posts/:id"
            element={
              <RequireAuth>
                <Post />
              </RequireAuth>
            }
          />
          <Route
            path="posts/:id/edit"
            element={
              <RequireAuth>
                <EditPost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<>Not found</>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
