import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsEl = document.querySelector(".gallery");

function createGalleryItem(items) {
    return items.map(item =>
        `<a class="gallery__item" href=${item.original}>
             <img class="gallery__image" src=${item.preview} alt=${item.description} />
         </a> `)
        .join('');
};
    

const addGalleryItem = createGalleryItem(galleryItems);

galleryItemsEl.innerHTML = addGalleryItem;

galleryItemsEl.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault()

    if (e.target.nodeName !== 'IMG') {
        return;
    }
  
  var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt'  });  
}

