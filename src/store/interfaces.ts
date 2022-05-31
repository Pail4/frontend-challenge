import { SerializedError } from "@reduxjs/toolkit";

export interface cat {
  id: number;
  image: URL;
  isLiked: boolean;
}

export interface sort {
  showLikedOnly: boolean;
}

export interface store {
  sort: sort;
  likedCats: cat[];
  cats: cat[];
  loading: boolean;
  error: Error | SerializedError | null;
}

export interface storage {
  store: store;
}
