import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { storage } from "./interfaces";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useStoreDispatch = () => useDispatch();
export const useStoreSelector: TypedUseSelectorHook<storage> = useSelector;
