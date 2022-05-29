import "./Header.css";
import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { NavPanel } from "./-NavPanel/NavPanel";

export function Header(): JSX.Element {
  return (
    <header className="Header">
      <Wrapper>
        <NavPanel />
      </Wrapper>
    </header>
  );
}
