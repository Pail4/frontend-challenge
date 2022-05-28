import './BlockList.css';

import React from 'react';
import { Block } from '../Block/Block';
import { cat } from '../../store/interfaces';
import { useStoreSelector } from '../../store/hooks';

export function BlockList(): JSX.Element {
  const store = useStoreSelector((state) => state.store);
  function createCatsList(cats: cat[]) {
    return cats.map((cat) => {
      return <Block
        key={cat.id}
        cat={cat}
      />;
    });
  }
  
  const showLikedOnly = store.sort.showLikedOnly;
  return (
    <div className="BlockList">
      {createCatsList(showLikedOnly ? store.likedCats : store.cats)}
    </div>
  );
}