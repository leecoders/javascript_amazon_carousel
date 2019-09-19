import cardCarouselTemplate from "./template.js";
import { $ } from "../../../../util/util.js";

class CardCarousel {
  constructor(
    parentElement,
    cardColor,
    cardImageSrc,
    cardName,
    contentCnt,
    { handleCardButtonClick }
  ) {
    this.parentElement = parentElement;
    this.cardColor = cardColor;
    this.cardImageSrc = cardImageSrc;
    this.cardName = cardName;
    this.contentCnt = contentCnt;
    this.cardContainer = undefined;
    this.buttonContainer = undefined;
    this.nameContainer = undefined;
    this.handleCardButtonClick = handleCardButtonClick;
  }

  setNameContainer = () => {
    this.nameContainer = document.createElement("div");
    this.parentElement.appendChild(this.nameContainer);
    this.nameContainer.className = "card-name-container";
  };

  setImage = () => {
    this.cardContainer.id = `${this.cardName.toLowerCase()}-card-container`;
    this.cardContainer.style.background = `${this.cardColor} url("${this.cardImageSrc}") no-repeat 28.5% 50%`;
    this.cardContainer.style.backgroundSize = `85rem 50rem`;
  };

  setName = () => {
    this.nameContainer.innerText = this.cardName;
  };

  setButton = () => {
    for (let i = 0; i < this.contentCnt; ++i) {
      const button = document.createElement("button");
      button.id = `${this.cardName.toLowerCase()}-button-${i}`;
      button.className = "card-circle-button";
      this.buttonContainer.appendChild(button);
      button.addEventListener("click", e => {
        this.handleCardButtonClick(button);
        e.stopPropagation();
      });
    }
  };

  render = () => {
    this.parentElement.innerHTML = cardCarouselTemplate;
    this.cardContainer = this.parentElement.children[0];
    this.buttonContainer = this.cardContainer.children[0];
    this.setNameContainer();
    this.setImage();
    this.setName();
    this.setButton();
  };
}

export { CardCarousel };
