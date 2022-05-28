import './Main.css';

import React, { useEffect } from 'react';
import { Wrapper } from '../Wrapper/Wrapper';
import { BlockList } from '../BlockList/BlockList';
import { useDispatch } from 'react-redux';

export function Main(): JSX.Element {
  
  return (
    <main className="Main">
      <Wrapper>
        <BlockList></BlockList>
      </Wrapper>
    </main>
  );
}