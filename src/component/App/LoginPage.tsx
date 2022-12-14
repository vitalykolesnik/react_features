import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signup } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      username: { value: string };
    };
    const username = target.username.value;

    signup({ username }, () => navigate(fromPage, { replace: true }));
  };

  return (
    <section>
      <h1>LoginPage </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>Path from: {fromPage}</p>
    </section>
  );
};
