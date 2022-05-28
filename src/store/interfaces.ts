export interface cat {
  id: number
  image: URL,
  isLiked: boolean
}

export interface sort {
  showLikedOnly: boolean
}

export interface store {
  sort: sort,
  likedCats: cat[],
  cats: cat[],
  loading: boolean
}