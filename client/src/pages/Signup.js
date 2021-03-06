import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignupUserMutation } from "../services/appApi";

function Signup() {
  const [email, putEmail] = useState("");
  const [password, putPassword] = useState("");
  const [username, putUsername] = useState("");
  const navigate = useNavigate();
  const [signupUser, { isLoading, error }] = useSignupUserMutation();
  function handleSignup(e) {
    e.preventDefault();
    signupUser({ username, email, password }).then(({ data }) => {
      if (data) {
        navigate('/app')
      }
    });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            onSubmit={handleSignup}
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Kawan"
                  className="input input-bordered"
                  onChange={(e) => putUsername(e.target.value)}
                  value={username}
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="hello@kawium.dev"
                  className="input input-bordered"
                  onChange={(e) => putEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => putPassword(e.target.value)}
                  value={password}
                  required
                />
                <label className="label">
                  <p className="label-text-alt">
                    Already have an account?
                    <span>
                      <Link to="/login">
                        <span className="link-hover text-blue-300">
                          {" "}
                          Sign in
                        </span>
                      </Link>
                    </span>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary tooltip" data-tip="Sign up now">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
