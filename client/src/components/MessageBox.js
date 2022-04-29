import React from "react";

function MessageBox() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col w-[80vw]">
      <div className="h-[80vh]"></div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row w-100 justify-between">
          <input
            type="text"
            placeholder="Type something cool..."
            className="input input-bordered w-full mr-6"
          />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageBox;
