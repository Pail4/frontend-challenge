import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { store, cat } from "./interfaces";

const defaultStore: store = {
  sort: {showLikedOnly: false},
  likedCats: [],
  cats: [],
  loading: false
};

function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}

const likeCat = createAction('LIKE_CAT', withPayloadType<cat>());
const dislikeCat = createAction('DISLIKE_CAT', withPayloadType<cat["id"]>());
const addCat = createAction('ADD_CAT', withPayloadType<cat>());

export const fetchCats = createAsyncThunk('FETCH_CATS', async(key: string) => {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=20&order=asc&size=full';
  const response = await fetch(url, { headers: {"X-Api-Key" : key} });
  const data = await response.json();
  return data;
});

export const reducer = createReducer(defaultStore, (builder) => {
  builder
    .addCase(likeCat, (state, action) => {
      state.likedCats.push(action.payload);
    })
    .addCase(dislikeCat, (state, action) => {
      const catIndex = state.likedCats.findIndex((cat) => cat.id === action.payload);
      state.likedCats.splice(catIndex, 1);
    })
    .addCase(addCat, (state, action) => {
      state.cats.push(action.payload);
    })
    .addCase(fetchCats.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchCats.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cats = action.payload.map(({id, url}) => {
        const isLiked = !!state.likedCats.find((item) => item.id === id);
        return {
          id: id,
          image: url,
          isLiked
        } as cat;
      });
      state.loading = false;
    });
});