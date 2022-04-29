import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLogoutUserMutation } from '../services/appApi'
function Navigation() {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation()
  async function handleLogout(e) {
    e.preventDefault()
    await logoutUser(user);
    window.location.replace('/')


  }
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-white"
          >
            <Link to="/">
              <li>
                <a href="/#">Home</a>
              </li>
            </Link>
            <Link to="/app">
              <li>
                <a href="/#">Chat</a>
              </li>
            </Link>
            {!user && (
              <>
                <Link to="/login">
                  <li>
                    <a href="/#">Login</a>
                  </li>
                </Link>
                <Link to="/signup">
                  <li>
                    <a href="/#">Sign Up</a>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <Link to="/">
          <a href="/#" class="btn btn-ghost normal-case text-xl">
            eChat
          </a>
        </Link>
      </div>
      {user && (
        <div class="navbar-end">
            <button class="btn btn-sm btn-secondary" onClick={handleLogout}>Log out</button>
        </div>
      )}
    </div>
  );
}

export default Navigation;
