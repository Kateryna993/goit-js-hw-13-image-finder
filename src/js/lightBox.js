import getRefs from './get-refs.js';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const refs = getRefs();

refs.galleryContainer.addEventListener('click', e => {
  let imgUrl = e.target.dataset.source;

  if (e.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">`);

  instance.show();
});
