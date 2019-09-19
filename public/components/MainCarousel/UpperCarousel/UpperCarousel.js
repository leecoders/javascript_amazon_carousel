import { CardCarousel } from "./CardCarousel/CardCarousel.js";
import { $ } from "../../../util/util.js";
import upperCarouselTemplate from "./template.js";

class UpperCarousel {
  constructor(
    parentElement,
    mainImagesObj,
    { handleCardClick, handleCardButtonClick }
  ) {
    this.parentElement = parentElement;
    this.mainImagesObj = mainImagesObj;
    this.cardImagesUrl = [
      "https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_A._CB513333159_.png",
      "https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_B._CB513285352_.png",
      "https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_C._CB513285352_.png",
      "https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_D._CB513285352_.png",
      "https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_E._CB513285352_.png"
    ];
    this.cardNames = Object.keys(this.mainImagesObj).map(key => key);
    this.cardColor = ["#00A8E1", "#FF6138", "#E31F64", "#36C2B4", "#FFC400"];
    this.cardContainers = [];
    this.cardCarousel = [];
    this.handleCardClick = handleCardClick;
    this.handleCardButtonClick = handleCardButtonClick;
  }

  lowlightAllCards = () => {
    this.cardContainers.forEach(cardContainer => {
      const card = cardContainer.children[0];
      const buttonContainer = card.children[0];
      card.classList.remove("card-selected");
      buttonContainer.style.visibility = "hidden";
    });
  };

  highlightCard = card => {
    this.lowlightAllCards();
    const buttonContainer = card.children[0];
    buttonContainer.style.visibility = "visible";
    card.classList.add("card-selected");
  };

  setCardContainers = () => {
    for (let i = 1; i < 6; ++i) {
      this.cardContainers.push($(`.upper-carousel-card-${i}`));
    }
  };

  setCardCarousel = () => {
    for (let i = 0; i < 5; ++i) {
      this.cardCarousel.push(
        new CardCarousel(
          this.cardContainers[i],
          this.cardColor[i],
          this.cardImagesUrl[i],
          this.cardNames[i],
          this.mainImagesObj[this.cardNames[i]].length,
          { handleCardButtonClick: this.handleCardButtonClick }
        )
      );
      this.cardCarousel[i].render();
    }
  };

  setCardEvent = () => {
    this.cardContainers.forEach((cardContainer, idx) => {
      cardContainer.addEventListener("click", () => {
        const card = cardContainer.children[0];
        this.highlightCard(card);
        this.handleCardClick(idx);
      });
    });
  };

  render = () => {
    this.parentElement.innerHTML = upperCarouselTemplate;
    this.setCardContainers();
    this.setCardCarousel();
    this.setCardEvent();
  };
}

export { UpperCarousel };
