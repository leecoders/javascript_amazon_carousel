import menuForAdminTemplate from "./template.js";
import { $ } from "../../utils/util.js";

class MenuForAdmin {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  setEvent = () => {
    $(".manage-user-container").style.visibility = "visible"; // 유저 페이지를 default로 보여줌
    this.manageUserMenu.addEventListener("click", () => {
      $(".manage-item-container").style.visibility = "hidden";
      $(".manage-user-container").style.visibility = "visible";
    });
    this.manageItemMenu.addEventListener("click", () => {
      $(".manage-item-container").style.visibility = "visible";
      $(".manage-user-container").style.visibility = "hidden";
    });
  };

  render = () => {
    this.parentElement.innerHTML = menuForAdminTemplate;
    this.manageUserMenu = $(".manage-user-menu");
    this.manageItemMenu = $(".manage-item-menu");
    this.setEvent();
  };
}

export { MenuForAdmin };
