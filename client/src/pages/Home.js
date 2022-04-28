import React from "react";

function Home() {
  return (
    <div className=" flex content-center justify-center flex-col flex-wrap font-sans">
      <p className="text-[#FF0083] mt-10 text-lg content-center justify-center flex">
        Echat - LIMITED BETA RELEASE
      </p>
      <div>
        <p className=" text-white text-6xl mt-4">
          The chat platform for the future
        </p>
      </div>
      <div className="">
        <p className="text-[#969696] content-center justify-center flex mt-4">
          Echat connects you to friends, Echat's where it happens
        </p>
      </div>
      <div className="content-center justify-center flex mt-40">
        <button className="btn btn-wide">Launch</button>
      </div>
    </div>
  );
}

export default Home;
