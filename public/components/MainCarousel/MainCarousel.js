import { UpperCarousel } from "./UpperCarousel/UpperCarousel.js";
import { LowerCarousel } from "./LowerCarousel/LowerCarousel.js";
import mainCarouselTemplate from "./template.js";
import { $, getImages } from "../../util/util.js";

class MainCarousel {
  constructor(parentElement, mainImagesObj) {
    this.parentElement = parentElement;
    this.mainImagesObj = mainImagesObj;
    this.upperCarousel = undefined;
    this.lowerCarousel = undefined;
    this.mainImages = undefined;
    this.cards = undefined;
    this.cardButtons = undefined;
  }

  getShorterDirection = beforeSelectedButton => {
    let beforeIdx, afterIdx, leftDist, rightDist;
    const buttonlength = this.cardButtons.length;
    this.cardButtons.forEach((cardButton, idx) => {
      if (cardButton.classList.contains("card-button-selected"))
        beforeIdx = idx;
      if (beforeSelectedButton === cardButton) afterIdx = idx;
    });
    if (!Number.isInteger(beforeIdx) || !Number.isInteger(afterIdx)) {
      return ["left", 0];
    } else if (beforeIdx < afterIdx) {
      rightDist = afterIdx - beforeIdx;
      leftDist = buttonlength - rightDist;
    } else {
      leftDist = beforeIdx - afterIdx;
      rightDist = buttonlength - leftDist;
    }
    return leftDist < rightDist ? ["left", leftDist] : ["right", rightDist];
  };

  handleCardClick = card => {
    const cardButtonContainer = card.children[0];
    this.upperCarousel.highlightCard(card);
    this.handleCardButtonClick(cardButtonContainer.children[0]);
  };

  handleCardButtonClick = button => {
    const [direction, distance] = this.getShorterDirection(button);
    this.upperCarousel.highlightCardButtons(button);
    for (let i = 0; i < distance; ++i) {
      this.handleSlideButtonClick(direction);
    }
  };

  handleSlideButtonClick = direction => {
    if (direction == "left") {
      this.lowerCarousel.moveImagesToLeft();
    } else if (direction == "right") {
      this.lowerCarousel.moveImagesToRight();
    }
  };

  setUpperCarousel = () => {
    this.upperCarousel = new UpperCarousel(
      $(".main-carousel-first-container"),
      this.mainImagesObj,
      {
        handleCardClick: this.handleCardClick,
        handleCardButtonClick: this.handleCardButtonClick
      }
    );
    this.upperCarousel.render();
  };

  setLowerCarousel = () => {
    this.lowerCarousel = new LowerCarousel(
      $(".main-carousel-second-container"),
      this.mainImages,
      this.mainImages.length,
      -60,
      { handleSlideButtonClick: this.handleSlideButtonClick }
    );
    this.lowerCarousel.render();
  };

  render = () => {
    this.parentElement.innerHTML = mainCarouselTemplate;
    this.mainImages = getImages(this.mainImagesObj);
    this.setUpperCarousel();
    this.setLowerCarousel();
    this.cards = document.querySelectorAll(".card-carousel-container");
    this.cardButtons = document.querySelectorAll(".card-circle-button");
    this.handleCardClick(this.cards[0]);
  };
}

export { MainCarousel };
