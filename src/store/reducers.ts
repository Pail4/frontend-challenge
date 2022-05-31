import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import { catsAPI } from "../API";
import { cat, sort } from "./interfaces";
import { defaultStore } from "./localStore";

function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}

export const likeCat = createAction("LIKE_CAT", withPayloadType<cat>());
export const dislikeCat = createAction("DISLIKE_CAT", withPayloadType<cat>());
export const addCat = createAction("ADD_CAT", withPayloadType<cat>());
export const changeSort = createAction(
  "CHANGE_SORT",
  withPayloadType<sort["showLikedOnly"]>()
);

export const fetchCats = createAsyncThunk("FETCH_CATS", async() => {
  const url = catsAPI.getUrl();
  const response = await fetch(url, {
    headers: { "X-Api-Key": "ffcb565d-366b-4b2d-8326-388c4b9c40e6" },
  });
  const data = await response.json();
  return data;
});

export const reducer = createReducer(defaultStore, (builder) => {
  builder
    .addCase(likeCat, (state, action) => {
      const newCat: cat = Object.assign({}, action.payload);
      newCat.isLiked = true;
      state.likedCats.push(newCat);
      state.cats = state.cats.map((oldCat) =>
        oldCat.id === newCat.id ? newCat : oldCat
      );
    })
    .addCase(dislikeCat, (state, action) => {
      const newCat: cat = Object.assign({}, action.payload);
      newCat.isLiked = false;
      const catIndex = state.likedCats.findIndex((cat) => cat.id === newCat.id);
      state.likedCats.splice(catIndex, 1);
      state.cats = state.cats.map((oldCat) =>
        oldCat.id === newCat.id ? newCat : oldCat
      );
    })
    .addCase(addCat, (state, action) => {
      state.cats.push(action.payload);
    })
    .addCase(fetchCats.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchCats.fulfilled, (state, action) => {
      state.cats = state.cats.concat(
        action.payload.map(({ id, url }: { id: number | string; url: URL }) => {
          const isLiked = !!state.likedCats.find((item) => item.id === id);
          return {
            id: id,
            image: url,
            isLiked,
          } as cat;
        })
      );
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchCats.rejected, (state, action) => {
      state.error = action.error;
    })
    .addCase(changeSort, (state, action) => {
      state.sort.showLikedOnly = action.payload;
    });
});
