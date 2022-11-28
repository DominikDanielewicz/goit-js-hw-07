"use strict";

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

function createGallery() {
  const previewImages = galleryItems.map(
    (previewImage) => previewImage.preview
  );
  const originalImages = galleryItems.map(
    (originalImage) => originalImage.original
  );
  const imagesDescriptions = galleryItems.map(
    (imageDescription) => imageDescription.description
  );

  for (let i = 0; i < galleryItems.length; i++) {
    const galleryItem = document.createElement("a");
    const galleryImg = document.createElement("img");
    galleryItem.classList.add("gallery__item");
    galleryImg.classList.add("gallery__image");
    galleryBox.append(galleryItem);
    galleryItem.append(galleryImg);
    galleryItem.setAttribute("href", `${originalImages[i]}`);
    galleryImg.setAttribute("src", `${previewImages[i]}`);
    galleryImg.setAttribute("alt", `${imagesDescriptions[i]}`);
  }
}

createGallery();

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
