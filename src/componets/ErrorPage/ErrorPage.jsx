import { Link } from "react-router-dom";

const ErrorPage = ({msg}) => {
  return (
    <div>
      <h1>{msg}</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;