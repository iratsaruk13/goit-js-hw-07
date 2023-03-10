import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// ------------Функція створення розмітки елемента галереї

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
      loading="lazy"
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

// -----------Реалізація делегування та отримання url
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
console.log(galleryEl);

galleryEl.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  // console.log(evt.target);
  const galleryImageUrl = evt.target.dataset.source;
  console.log(galleryImageUrl);
  makeModalWindow(galleryImageUrl);
}

// -----------Відкриття модального вікна по кліку на елементі галереї

function makeModalWindow(url) {
  window.addEventListener("keydown", onKeyDownEsc);
  const modalWindow = basicLightbox.create(`
    <img src="${url}" width="1000" height="800">
`);
  modalWindow.show();
  function onKeyDownEsc(evt) {
    if (evt.code === "Escape") {
      modalWindow.close();
    }
    window.removeEventListener("keydown", onKeyDownEsc);
  }
}
