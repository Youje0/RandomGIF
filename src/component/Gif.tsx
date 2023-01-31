import React from "react";

function Gif({ gif }: { gif: string | undefined }) {
  return (
    <>
      <img className="gif" alt="gif" src={gif} />
    </>
  );
}

export default Gif;
