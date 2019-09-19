import { LowerCarousel } from "./LowerCarousel/LowerCarousel.js";
import { UpperCarousel } from "./UpperCarousel/UpperCarousel.js";
import mainCarouselTemplate from "./template.js";
import { $, getImages } from "../../util/util.js";

class MainCarousel {
  constructor(parentElement, mainImagesObj) {
    this.parentElement = parentElement;
    this.mainImagesObj = mainImagesObj;
  }

  handleCardClick = cardIdx => {
    console.log(cardIdx);
  };

  handleCardButtonClick = cardButtonIdx => {
    console.log(cardButtonIdx);
  };

  handleSlideButtonClick = slideButtonidx => {
    console.log(slideButtonidx);
  };

  render = () => {
    this.parentElement.innerHTML = mainCarouselTemplate;
    const mainImages = getImages(this.mainImagesObj);
    const upperCarousel = new UpperCarousel(
      $(".main-carousel-first-container"),
      this.mainImagesObj,
      {
        handleCardClick: this.handleCardClick,
        handleCardButtonClick: this.handleCardButtonClick
      }
    );
    const lowerCarousel = new LowerCarousel(
      $(".main-carousel-second-container"),
      mainImages,
      mainImages.length,
      -60,
      { handleSlideButtonClick: this.handleSlideButtonClick }
    );
    upperCarousel.render();
    lowerCarousel.render();
  };
}

export { MainCarousel };
