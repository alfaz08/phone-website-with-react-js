import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen grid justify-center items-center">
      <h1>OOOPPPSS!!!!Error 4004</h1>
      <Link to="/"> Go Back Home</Link>
    </div>
  );
};

export default ErrorPage;