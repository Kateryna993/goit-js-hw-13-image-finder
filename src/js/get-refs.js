export default function getRefs() {
    const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryContainer: document.querySelector('.js-gallery-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
  };

  return refs;
}