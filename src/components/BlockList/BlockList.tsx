import './BlockList.css';

import React from 'react';
import { Block } from '../Block/Block';

export function BlockList(): JSX.Element {
  
  return (
    <div className="BlockList">
      <Block></Block>
      <Block></Block>
      <Block></Block>
      <Block></Block>
      <Block></Block>
      <Block></Block>
      <Block></Block>
    </div>
  );
}