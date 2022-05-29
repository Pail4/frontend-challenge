import { cat, store } from "./interfaces";

export const localStore = {
  setLikedCats(likedCats: cat[]) {
    try {
      const data = JSON.stringify(likedCats);
      localStorage.setItem("likedCats", data);
    } catch (err) {
      console.log(err);
    }
  },
  getLikedCats(): cat[] {
    try {
      const data = localStorage.getItem("likedCats");
      if (!data) return [];

      const likedCats = JSON.parse(data);
      return likedCats;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};

export const defaultStore: store = {
  sort: { showLikedOnly: false },
  likedCats: localStore.getLikedCats(),
  cats: [],
  loading: false,
};
