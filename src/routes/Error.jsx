import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div
      className="ErrorContainer"
      ><strong>404 Not Found</strong> 
      <Link to={`/`}>

      <ButtonComponent
        title="Redirect to Home"
        type="contained"
        color="black"
        />
        </Link>
        </div>
    </>
  );
};

export default Error;
