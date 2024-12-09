import React from "react";
import errorImg from "../assets/404/404.gif";
import BackButton from "../Components/BackButton";
import Header from "../Components/Common/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header/>
      <div className="py-4 flex justify-center">
        <BackButton />
      </div>
      <img src={errorImg} alt="" className="mx-auto" />
    </div>
  );
};

export default ErrorPage;
