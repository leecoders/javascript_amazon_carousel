import cardCarouselTemplate from "./template.js";
import { $ } from "../../../../util/util.js";

class CardCarousel {
  constructor(parentElement, cardColor, cardImageSrc, cardName, contentCnt) {
    this.parentElement = parentElement;
    this.cardColor = cardColor;
    this.cardImageSrc = cardImageSrc;
    this.cardName = cardName;
    this.contentCnt = contentCnt;
  }

  setImage = () => {
    this.parentElement.style.background = `${this.cardColor} url("${this.cardImageSrc}") no-repeat 28.5% 50%`;
    this.parentElement.style.backgroundSize = `85rem 50rem`;
  };

  setName = () => {
    const nameContainer = this.parentElement.children[0].children[0];
    nameContainer.innerText = this.cardName;
  };

  render = () => {
    this.parentElement.innerHTML = cardCarouselTemplate;
    this.setImage();
    this.setName();
  };
}

export { CardCarousel };
