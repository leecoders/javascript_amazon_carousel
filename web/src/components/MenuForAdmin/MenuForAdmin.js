import menuForAdminTemplate from "./template.js";
import { $ } from "../../utils/util.js";

class MenuForAdmin {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  setEvent = () => {
    this.manageUserMenu.addEventListener("click", () => {});
    this.manageItemMenu.addEventListener("click", () => {});
  };

  render = () => {
    this.parentElement.innerHTML = menuForAdminTemplate;
    this.manageUserMenu = $(".manage-user-menu");
    this.manageItemMenu = $(".manage-item-menu");
    this.setEvent();
  };
}

export { MenuForAdmin };
