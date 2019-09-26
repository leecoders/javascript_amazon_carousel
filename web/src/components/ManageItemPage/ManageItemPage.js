import manageItemPageTemplate from "./template.js";
import { $ } from "../../utils/util.js";

class ManageItemPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.itemImage;
    this.render();
  }

  setEvent = () => {
    this.itemImageContainer.addEventListener("click", () => {
      $("#item-upload-button").click();
    });
    this.selectImageButton.addEventListener("change", e => {
      // 파일 등록 완료 이벤트
      if (!e.target.files[0]) return; // 취소 버튼 -> target.files에 이미지 없음 -> 예외 처리
      this.itemImage = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.itemImage);
      reader.onload = e => {
        this.itemImageContainer.style.background = `url(${e.target.result}) no-repeat 50% 50%`;
        this.itemImageContainer.style.backgroundSize = `10rem 10rem`;
      };
    });
    this.itemSubmitButton.addEventListener("click", () => {
      console.log(this.itemImage);
    });
  };

  render() {
    this.parentElement.insertAdjacentHTML("beforeend", manageItemPageTemplate);
    this.itemImageContainer = $(".item-add-image");
    this.selectImageButton = $("#item-upload-button");
    this.itemSubmitButton = $("#item-add-button");
    this.setEvent();
  }
}

export { ManageItemPage };
