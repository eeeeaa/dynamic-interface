let currentImageIndex = 0;
const imageSlideContainer = document.querySelector(".image-slide-container");

export function setupImageCarouselComponent() {
  const content = imageSlideContainer.querySelector(".image-carousel");
  const imageList = Array.from(content.querySelectorAll(".image-slide"));

  setupNavigationBar(imageList, imageSlideContainer);
  setupImageCarouselButtons(imageList, imageSlideContainer);
  initImage(imageList);
}

function initImage(imageList) {
  updateCarousel(imageList);
  setupAutoScroll(imageList);
}

function setupNavigationBar(imageList, container) {
  const navBar = document.createElement("div");
  navBar.classList.toggle("image-navigation-bar");

  for (let i = 0; i < imageList.length; i++) {
    const navItem = document.createElement("div");
    navItem.classList.toggle("nav-circle");
    navItem.addEventListener("click", (e) => {
      if (currentImageIndex !== i) {
        setIndex(i, imageList.length);
        updateCarousel(imageList);
      }
    });
    navBar.append(navItem);
  }

  container.append(navBar);
}

function setupImageCarouselButtons(imageList, container) {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.toggle("image-buttons");

  const prevButton = document.createElement("button");
  prevButton.classList.toggle("image-carousel-button");
  prevButton.classList.toggle("image-previous-button");
  prevButton.textContent = "Previous image";

  const nextButton = document.createElement("button");
  nextButton.classList.toggle("image-carousel-button");
  nextButton.classList.toggle("image-next-button");
  nextButton.textContent = "Next image";

  prevButton.addEventListener("click", (e) => {
    decrementIndex(imageList.length);
    updateCarousel(imageList);
  });
  nextButton.addEventListener("click", (e) => {
    incrementIndex(imageList.length);
    updateCarousel(imageList);
  });

  buttonContainer.append(prevButton, nextButton);
  container.append(buttonContainer);
}

function updateCarousel(imageList) {
  for (let i = 0; i < imageList.length; i++) {
    imageList[i].classList.remove("image-visible");
    if (currentImageIndex === i) {
      imageList[i].classList.toggle("image-visible");
      imageList[i].scrollIntoView({ behavior: "smooth" });
    }
  }
  updateNavBar();
}

function updateNavBar() {
  const navBar = imageSlideContainer.querySelector(".image-navigation-bar");
  if (navBar == null) {
    return;
  }

  const navItems = Array.from(navBar.querySelectorAll(".nav-circle") || []);

  if (navItems.length <= 0) {
    return;
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("selected");
    if (currentImageIndex === i) {
      navItems[i].classList.toggle("selected");
    }
  }
}

function setupAutoScroll(imageList) {
  setInterval(() => {
    incrementIndex(imageList.length);
    updateCarousel(imageList);
  }, 5000);
}

function setIndex(index, length) {
  currentImageIndex = index % length;
}
function incrementIndex(length) {
  console.log(currentImageIndex);
  currentImageIndex = (currentImageIndex + 1) % length;
}

function decrementIndex(length) {
  console.log(currentImageIndex);
  currentImageIndex = (length + ((currentImageIndex - 1) % length)) % length;
}
