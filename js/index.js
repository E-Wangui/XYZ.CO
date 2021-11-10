const carousel = document.querySelector(".carousel");
const carouselPrev = document.querySelector(".prev");
const carouselNext = document.querySelector(".next");
const carouselItems = document.querySelectorAll(".carousel__item");

let currentCarousel = 0;

const displayOneCarousel = (index) => {
  for (let item of carouselItems) {
    item.style.display = "none";
  }
  carouselItems[index].style.display = "flex";
};

displayOneCarousel(currentCarousel);

setInterval(() => {
  currentCarousel = currentCarousel === 4 ? 0 : currentCarousel + 1;
  displayOneCarousel(currentCarousel);
  //   carouselItems[currentCarousel].style.display = "flex";
}, 5000);

carouselPrev.addEventListener("click", () => {
  currentCarousel = currentCarousel === 0 ? 4 : currentCarousel - 1;
  displayOneCarousel(currentCarousel);
});

carouselNext.addEventListener("click", () => {
  currentCarousel = currentCarousel === 4 ? 0 : currentCarousel + 1;
  displayOneCarousel(currentCarousel);
});
