import "./Main.css";

import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { BlockList } from "../BlockList/BlockList";
import { useStoreSelector } from "../../store/hooks";

import { Message } from "../Message/Message";
import { Loading } from "../Message/-Loading/Loading";
import { Error } from "../Message/-Error/Error";

export function Main(): JSX.Element {
  const store = useStoreSelector((state) => state.store);
  return (
    <main className="Main">
      <Wrapper>
        <BlockList></BlockList>
        <Message>
          {store.loading && !store.error ? <Loading /> : null}
          {store.error ? <Error /> : null}
        </Message>
      </Wrapper>
    </main>
  );
}
