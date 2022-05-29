import "./NavPanel.css";
import React from "react";
import { useStoreSelector } from "../../../store/hooks";
import { useDispatch } from "react-redux";
import { changeSort } from "../../../store/reducers";

export function NavPanel() {
  const showLikedOnly = useStoreSelector(
    (state) => state.store.sort.showLikedOnly
  );
  const dispatch = useDispatch();

  const changeTab = (srt: boolean) => () => dispatch(changeSort(srt));
  return (
    <nav className="Header-NavPanel">
      <NavPanelButton onClick={changeTab(false)} choosen={!showLikedOnly}>
        Все котики
      </NavPanelButton>
      <NavPanelButton onClick={changeTab(true)} choosen={showLikedOnly}>
        Любимые котики
      </NavPanelButton>
    </nav>
  );
}

function NavPanelButton({
  choosen,
  onClick,
  children,
}: {
  choosen: boolean;
  onClick: VoidFunction;
  children: string;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "NavPanel-Button " + (choosen ? "NavPanel-Button_choosen" : "")
      }
    >
      {children}
    </button>
  );
}
