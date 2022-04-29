import React from "react";

function Sidebar() {
  const rooms = ["General", "Music", "Business", "Fitness"];
  return (
    <div>
      <ul class="menu bg-base-100 w-56 p-2 rounded-box">
        <li class="menu-title">
          <span>Channels</span>
        </li>
        {rooms.map((room, index) => (
          <li key={index}>
            <a href="/#">{room}</a>
          </li>
        ))}
        <li class="menu-title">
          <span>Members</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
