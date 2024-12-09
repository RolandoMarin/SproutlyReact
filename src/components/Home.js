import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <div className="container mt-5 text-center">
        <h1>Welcome to Sproutly!</h1>
        <div className="mt-4">
          <Link to="/login" className="btn btn-outline-primary me-3">Login</Link>
          <Link to="/register" className="btn btn-outline-success">Register</Link>
        </div>
      </div>
    );
  };
  
  export default HomePage;