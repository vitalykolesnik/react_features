import { CustomLink } from "./CustomLink";

export const Header: React.FC = () => {
  return (
    <nav className="w-full fixed top-0 z-50 flex flex-row justify-center bg-gray-400 shadow-md shadow-gray-600">
      <CustomLink to="/">Counter</CustomLink>
      <CustomLink to="/film">Films</CustomLink>
      <CustomLink to="/web">Web-camera</CustomLink>
      <CustomLink to="/posts">Posts</CustomLink>
    </nav>
  );
};
