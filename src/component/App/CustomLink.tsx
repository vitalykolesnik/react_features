import { Link, useMatch } from "react-router-dom";

interface CustomLinkProps {
  children?: React.ReactNode;
  props?: React.ReactPropTypes;
  to: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  to,
  ...props
}) => {
  const match = useMatch(to);

  const createStyle = () => {
    return `p-2 hover:underline ${match ? "text-black" : "text-gray-200"}`;
  };

  return (
    <Link to={to} className={createStyle()} {...props}>
      {children}{" "}
    </Link>
  );
};
