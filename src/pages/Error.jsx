import Wrapper from "../assets/wrappers/ErrorPage";
import { useRouteError, Link } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status == 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h4>Ups!</h4>
          <p>We can't seem to find the page you are looking for...</p>
          <Link to="/">Back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something Went Wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
