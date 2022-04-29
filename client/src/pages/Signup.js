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
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Sign up!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            onSubmit={handleSignup}
          >
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Kawan"
                  class="input input-bordered"
                  onChange={(e) => putUsername(e.target.value)}
                  value={username}
                  required
                />
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="hello@kawium.dev"
                  class="input input-bordered"
                  onChange={(e) => putEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  class="input input-bordered"
                  onChange={(e) => putPassword(e.target.value)}
                  value={password}
                  required
                />
                <label class="label">
                  <p class="label-text-alt">
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
              <div class="form-control mt-6">
                <button class="btn btn-primary tooltip" data-tip="Sign up now">
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
