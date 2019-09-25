import manageUserPageTemplate from "./template.js";
import { ListUser } from "../../components/ListUser/ListUser.js";
import { $ } from "../../utils/util.js";

class ManageUserPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.listUserArray = [];
    this.render();
  }

  setUserList = () => {
    const userLength = 5; // 임시로 값 넣어줌
    for (let i = 0; i < userLength; ++i) {
      this.userListContainer.insertAdjacentHTML(
        "beforeend",
        /*html*/ `<div id="user-list-${i}" class="user-list"></div>`
      );
      this.listUserArray.push(new ListUser($(`#user-list-${i}`), i));
    }
  };

  render() {
    this.parentElement.insertAdjacentHTML("beforeend", manageUserPageTemplate);
    this.userListContainer = $(".user-list-container");
    this.setUserList();
  }
}

export { ManageUserPage };
