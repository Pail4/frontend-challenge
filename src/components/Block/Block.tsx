import "./Block.css";

import React, { useState } from "react";
import { LikeBtn } from "./-LikeBtn/LikeBtn";
import { cat } from "../../store/interfaces";
import { useDispatch } from "react-redux";
import { dislikeCat, likeCat } from "../../store/reducers";

export function Block({ cat }: { cat: cat }): JSX.Element {
  const dispatch = useDispatch();
  const [lastTap, setLastTap] = useState(new Date());
  function likeClick() {
    if (!cat.isLiked) {
      dispatch(likeCat(cat));
    } else {
      dispatch(dislikeCat(cat));
    }
  }

  function doubletap() {
    const now = new Date();
    const timesince = now.getTime() - lastTap.getTime();
    if (timesince < 300 && timesince > 0) {
      likeClick();
    }
    setLastTap(new Date());
  }

  return (
    <div
      className="Block"
      onLoad={() => console.log("loading...")}
      onClick={doubletap}
    >
      <img
        src={cat.image.toString()}
        alt="sweety-kitty"
        className="Block-Img"
      />
      <LikeBtn onClick={likeClick} isLiked={cat.isLiked} />
    </div>
  );
}

//<img src={cat.image} alt="sweety-kitty" className='Block-Img' />
