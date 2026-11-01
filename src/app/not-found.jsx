import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center max-w-lg  mx-auto">
      <h1 className="text-9xl font-extrabold text-blue-500">404</h1>

      <h2 className="text-3xl font-bold mt-4">Page Not Found!</h2>

      <p className="text-gray-400 mt-4">
        Oops! The page you are looking for might have been removed or is
        unavailable.
      </p>
      <Link href={"/"}>
        <button className="btn  mt-4 bg-blue-500 text-white">Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
