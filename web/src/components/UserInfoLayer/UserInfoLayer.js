import userInfoLayerTemplate from "./template.js";
import { $ } from "../../utils/util.js";
import { SectionForAdmin } from "../SectionForAdmin/SectionForAdmin.js";

class UserInfoLayer {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  setEvent = () => {
    this.loginButton.addEventListener("click", () => {
      location.href = "src/pages/signin";
    });
    this.mainPageButton.addEventListener("click", () => {});
  };

  render() {
    this.parentElement.innerHTML = userInfoLayerTemplate;
    this.loginButton = $("#login-button");
    this.logoutButton = $("#logout-button");
    this.adminPageButton = $("#admin-page-button");
    this.mainPageButton = $("#main-page-button");
    this.userInfoButton = $("#user-info-button");
    this.section = $("section");
    this.setEvent();
  }
}

export { UserInfoLayer };
