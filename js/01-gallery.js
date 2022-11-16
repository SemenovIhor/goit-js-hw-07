import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryItemsEl = document.querySelector(".gallery");

function createGalleryItem(items) {
    return items.map(item =>
        `<div class="gallery__item">
              <a class="gallery__link" href="large-image.jpg">
                <img
                  class="gallery__image"
                  src=${item.preview}
                  data-source=${item.original}
                  alt=${item.description}
                />
              </a>
            </div>`).join('');
};
    

const addGalleryItem = createGalleryItem(galleryItems);

galleryItemsEl.innerHTML = addGalleryItem;

galleryItemsEl.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }
  
    const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
    `);

    instance.show();

}

