import './Block.css';

import React from 'react';
import { LikeBtn } from './-LikeBtn/LikeBtn';

export function Block(): JSX.Element {
  
  return (
    <div className="Block">
      <LikeBtn />
    </div>
  );
}