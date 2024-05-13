import React from "react";

const FromError = ({ error }: any) => {
  return error && <p className="text-red-500 mt-1"> {error.message} </p>;
};

export default FromError;
