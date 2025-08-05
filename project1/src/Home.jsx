import React from "react";
import { Outlet } from "react-router";
import MainAuth from "./Component/Authentiction/MainAuth";

const Home = () => {
  const token = localStorage.getItem("token");

  return <div className="h-[100vh]">{token ? <Outlet /> : <MainAuth />}</div>;
};

export default Home;
