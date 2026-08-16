import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };
  
  return (
    <div>
      404 Page not found!
      <br />
      <button onClick={handleBackToHome} className="cursor-pointer">
        Back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
