import { CardCarousel } from "./CardCarousel/CardCarousel.js";
import { $ } from "../../../util/util.js";
import upperCarouselTemplate from "./template.js";

class UpperCarousel {
  constructor(parentElement, mainImagesObj) {
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
  }

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
          this.mainImagesObj[this.cardNames[i]].length
        )
      );
      this.cardCarousel[i].render();
    }
  };

  render = () => {
    this.parentElement.innerHTML = upperCarouselTemplate;
    this.setCardContainers();
    this.setCardCarousel();
  };
}

export { UpperCarousel };
