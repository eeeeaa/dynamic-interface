let currentImageIndex = 0;

export function setupImageCarouselComponent() {
  const imageSlideContainer = document.querySelector(".image-slide-container");
  const content = imageSlideContainer.querySelector(".image-carousel");
  const buttonContainer = imageSlideContainer.querySelector(".image-buttons");

  const imageList = Array.from(content.querySelectorAll(".image-slide"));
  const prevButton = buttonContainer.querySelector(".image-previous-button");
  const nextButton = buttonContainer.querySelector(".image-next-button");

  initImage(imageList);
  setupImageCarouselLogic(imageList, prevButton, nextButton);
}

function initImage(imageList) {
  updateCarousel(imageList);
}

function setupImageCarouselLogic(imageList, prevButton, nextButton) {
  prevButton.addEventListener("click", (e) => {
    decrementIndex(imageList.length);
    updateCarousel(imageList);
  });
  nextButton.addEventListener("click", (e) => {
    incrementIndex(imageList.length);
    updateCarousel(imageList);
  });
}

function updateCarousel(imageList) {
  for (let i = 0; i < imageList.length; i++) {
    imageList[i].classList.remove("image-visible");
    if (currentImageIndex === i) {
      imageList[i].classList.toggle("image-visible");
    }
  }
}

function incrementIndex(length) {
  console.log(currentImageIndex);
  currentImageIndex = (currentImageIndex + 1) % length;
}

function decrementIndex(length) {
  console.log(currentImageIndex);
  currentImageIndex = (length + ((currentImageIndex - 1) % length)) % length;
}
