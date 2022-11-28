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
    const galleryItem = document.createElement("div");
    const galleryLink = document.createElement("a");
    const galleryImg = document.createElement("img");
    galleryItem.classList.add("gallery__item");
    galleryLink.classList.add("gallery__link");
    galleryImg.classList.add("gallery__image");
    galleryBox.append(galleryItem);
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImg);
    galleryLink.setAttribute("href", `${originalImages[i]}`);
    galleryImg.setAttribute("src", `${previewImages[i]}`);
    galleryImg.setAttribute("data-source", `${originalImages[i]}`);
    galleryImg.setAttribute("alt", `${imagesDescriptions[i]}`);
  }
}

createGallery();

galleryBox.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src='${e.target.getAttribute("data-source")}'>`
  );
  instance.show();

  galleryBox.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
