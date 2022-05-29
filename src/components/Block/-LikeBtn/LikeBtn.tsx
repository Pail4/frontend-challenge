import "./LikeBtn.css";

import React from "react";

export function LikeBtn({
  onClick,
  isLiked,
}: {
  onClick: VoidFunction;
  isLiked: boolean;
}): JSX.Element {
  return (
    <button
      className={"Block-LikeBtn " + (isLiked ? "Block-LikeBtn_liked" : "")}
      onClick={onClick}
    ></button>
  );
}
