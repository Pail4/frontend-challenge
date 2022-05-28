export const catsAPI = {
  url: 'https://api.thecatapi.com/v1/images/search?order=asc&size=full',
  page: 0,
  limit: 20,
  getUrl() {
    return this.url + '&limit=' + this.limit + '&page=' + this.page++;
  }
};