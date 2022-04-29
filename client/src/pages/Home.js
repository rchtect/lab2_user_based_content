import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" flex content-center justify-center flex-col flex-wrap font-sans">
      <p className="text-[#FF0083] mt-10 text-lg content-center justify-center flex">
        eChat - LIMITED BETA RELEASE
      </p>
      <div>
        <p className=" text-white text-6xl mt-4">
          The chat platform of the future
        </p>
      </div>
      <div className="">
        <p className="text-[#969696] content-center justify-center flex mt-4">
          eChat connects you to friends, eChat is where it happens
        </p>
      </div>
      <div className="content-center justify-center flex mt-40">
        <label for="my-modal-6" class="btn modal-button">
          Launch
        </label>

        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Dear user</h3>
            <p className="py-4">
              This is still in beta, some functions might not work properly, if
              you found any bugs make sure to contact us as soon as possible,
              thank you!
            </p>
            <div className="modal-action">
              <Link to="/app">
                <label for="my-modal-6" class="btn">
                  Ok
                </label>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
