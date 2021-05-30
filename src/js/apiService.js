import getRefs from './get-refs.js';
import imgCardTmpl from '../templates/image-card.hbs';
import ImagesApiService from './images-service.js';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearchImg);

refs.loadMoreBtn.addEventListener('click', onLoadMoreImgs);

const imagesApiService = new ImagesApiService();

console.log(imagesApiService);

function onSearchImg(e) {
  e.preventDefault();

  imagesApiService.query = e.currentTarget.elements.query.value;
  imagesApiService.resetPage();
  imagesApiService.fetchImages()
  .then(renderImgCard);
}

function onLoadMoreImgs() {
  imagesApiService.fetchImages()
  .then(renderImgCard);
}

function renderImgCard(hits) {
    const markup = imgCardTmpl(hits);
    refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}
