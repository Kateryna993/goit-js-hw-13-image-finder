export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    console.log(this);

    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=21859348-c38bd78951db790eb6ef65701`;

    return fetch(url)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        this.incrementPage();

        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1; 
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
