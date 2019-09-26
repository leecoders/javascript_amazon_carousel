import manageItemPageTemplate from "./template.js";
import { $ } from "../../utils/util.js";
import { fetchCheckItemName, fetchAddItem } from "../../utils/fetch.js";

class ManageItemPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.itemImage;
    this.render();
  }

  checkFillingAllContents = () => {
    if (
      !this.itemImage ||
      !this.itemName ||
      !this.itemCategory ||
      !this.itemSummary
    )
      return false;
    return true;
  };

  submitItem = async () => {
    const resultCheckDupicate = await fetchCheckItemName(this.itemName);
    if (resultCheckDupicate.data) {
      console.log("이미 존재하는 아이템입니다.");
      return;
    }
    const result = await fetchAddItem(
      this.itemImage,
      this.itemName,
      this.itemCategory,
      this.itemSummary
    );
  };

  setAddItemEvent = async () => {
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
    this.itemSubmitButton.addEventListener("click", async () => {
      this.itemName = $("#item-input-name").value;
      this.itemCategory = $("#item-input-category").value;
      this.itemSummary = $("#item-input-summary").value;
      if (this.checkFillingAllContents()) {
        await this.submitItem();
      } else {
        console.log("모든 목록을 채워주세요.");
      }
    });
  };

  setOthersEvent = () => {};

  render() {
    this.parentElement.insertAdjacentHTML("beforeend", manageItemPageTemplate);
    this.itemImageContainer = $(".item-add-image");
    this.selectImageButton = $("#item-upload-button");
    this.itemSubmitButton = $("#item-add-button");
    this.categoryContainer = $("manage-item-category-container");
    this.setAddItemEvent();
  }
}

export { ManageItemPage };
