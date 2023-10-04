import React, { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParams = urlParams.get("code");
    console.log(codeParams);
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl">Ini Home</h1>
    </>
  );
};

export default Home;
