import { LowerCarousel } from "./LowerCarousel/LowerCarousel.js";
import { UpperCarousel } from "./UpperCarousel/UpperCarousel.js";
import mainCarouselTemplate from "./template.js";
import { $, getImages } from "../../util/util.js";

class MainCarousel {
  constructor(parentElement, mainImagesObj) {
    this.parentElement = parentElement;
    this.mainImagesObj = mainImagesObj;
    this.cards = undefined;
    this.cardButtons = undefined;
  }

  handleCardButtonClick = button => {
    this.cardButtons.forEach(cardButton => {
      cardButton.classList.remove("card-button-selected");
    });
    button.classList.add("card-button-selected");
  };

  handleCardClick = card => {
    const cardButtonContainer = card.children[0];
    this.handleCardButtonClick(cardButtonContainer.children[0]);
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
    this.cards = document.querySelectorAll(".card-carousel-container");
    this.cardButtons = document.querySelectorAll(".card-circle-button");
  };
}

export { MainCarousel };
