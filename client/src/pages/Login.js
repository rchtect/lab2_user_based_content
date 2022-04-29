import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, putEmail] = useState("");
  const [password, putPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            onSubmit={handleLogin}
          >
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="isaaq@dev.io"
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
                    Don't have account?
                    <span>
                      <Link to="/signup">
                        <span className="link-hover text-blue-300">
                          {" "}
                          Sign up
                        </span>
                      </Link>
                    </span>
                  </p>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary tooltip" data-tip="Login now">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
