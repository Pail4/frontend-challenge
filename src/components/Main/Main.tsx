import './Main.css';

import React from 'react';
import { Wrapper } from '../Wrapper/Wrapper';
import { BlockList } from '../BlockList/BlockList';

export function Main(): JSX.Element {
  
  return (
    <main className="Main">
      <Wrapper>
        <BlockList></BlockList>
      </Wrapper>
    </main>
  );
}