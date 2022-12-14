import { useAuth } from "hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { CustomLink } from "component/App/CustomLink";

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout(() => navigate("/login", { replace: true }));
  };

  return (
    <>
      <nav className="w-full fixed top-0 z-50 flex flex-row justify-center bg-gray-400 shadow-md shadow-gray-600">
        <div className="flex md:flex-row flex-col text-center">
          <div>
            {user ? (
              <div className="px-4 py-2 flex gap-4 md:absolute md:right-4">
                <p className="font-semibold ">Hi, {user.username}!</p>
                <button
                  className="mx-2 px-4  shadow-black text-white hover:underline"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="px-4 py-2 md:absolute md:right-4">
                <Link className="mx-2 px-4 shadow-black text-white" to="/login">
                  Login
                </Link>
              </div>
            )}
          </div>
          <CustomLink to="/">Counter</CustomLink>
          <CustomLink to="/film">Films</CustomLink>
          <CustomLink to="/web">Web-camera</CustomLink>
          <CustomLink to="/posts">Posts</CustomLink>
        </div>
      </nav>
    </>
  );
};
