import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// ------------Функція створення розмітки елемента галереї

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li> <a class="gallery__item" href="${original}">
      <img loading="lazy"
      class="gallery__image" 
      src="${preview}" 
      alt="${description}" 
      style="display: block"/>
    </a>  </li>` ;
    })
    .join("");
}

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
console.log(galleryEl);

const modalSimpleLightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
