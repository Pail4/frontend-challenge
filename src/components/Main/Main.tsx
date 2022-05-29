import './Main.css';

import React from 'react';
import { Wrapper } from '../Wrapper/Wrapper';
import { BlockList } from '../BlockList/BlockList';
import { useStoreSelector } from '../../store/hooks';
import { Loading } from '../Loading/Loading';

export function Main(): JSX.Element {
  const isLoading = useStoreSelector((state) => state.store.loading);
  return (
    <main className="Main">
      <Wrapper>
        <BlockList></BlockList>
        {isLoading ? <Loading /> : null}
      </Wrapper>
    </main>
  );
}