import React from "react";
import { Link } from "react-router-dom";
import { PostType } from "./Post";

export const PostPreview: React.FC<PostType> = ({ id, title, body }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <Link
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      to={`${id}`}
      key={id}
    >
      <>
        <li className="px-4 text-left">
          {id}. {title}
        </li>
        {isVisible ? (
          <div
            className="absolute px-4 py-4 bg-white opacity-100 \n
           border-2 border-gray-800 shadow-lg shadow-gray-600 "
          >
            <section className="text-left">
              <h1 className="font-semibold text-xl pb-4">{title}</h1>
              {body}
            </section>
          </div>
        ) : (
          ""
        )}
      </>
    </Link>
  );
};
