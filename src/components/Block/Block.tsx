import './Block.css';

import React from 'react';
import { LikeBtn } from './-LikeBtn/LikeBtn';
import { cat } from '../../store/interfaces';
import { useDispatch } from 'react-redux';
import { dislikeCat, likeCat } from '../../store/reducers';

export function Block({ cat }: { cat: cat }): JSX.Element {
  const dispatch = useDispatch();
  function likeClick() {
    if (!cat.isLiked) {
      dispatch(likeCat(cat));
    } else {
      dispatch(dislikeCat(cat));
    }
  }

  return (
    <div className="Block" style={{backgroundImage: `url(${cat.image})`}}>
      <LikeBtn onClick={likeClick} isLiked={cat.isLiked} />
    </div>
  );
}

//<img src={cat.image} alt="sweety-kitty" className='Block-Img' />