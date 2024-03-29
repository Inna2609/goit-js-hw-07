import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
const markup = createGallaryMarkup(galleryItems);

gallery.insertAdjacentHTML('afterbegin', markup);

gallery.addEventListener(`click`, onPhotoClick, { once: true });

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
              
            </div>`;
    })
    .join(``);
}
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
function onPhotoClick(evt) {
  evt.preventDefault();
  const isThisImage = evt.target.classList.contains(`gallery__image`);
  if (!isThisImage) {
    return;
  }
}
