import manageUserPageTemplate from "./template.js";
import { ListUser } from "../../components/ListUser/ListUser.js";
import { $ } from "../../utils/util.js";
import { fetchAllUsers } from "../../utils/fetch.js";

class ManageUserPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.listUserArray = [];
    this.render();
  }

  setUserList = () => {
    for (let i = 0; i < this.listLength; ++i) {
      this.userListContainer.insertAdjacentHTML(
        "beforeend",
        /*html*/ `<div id="user-list-${i}" class="user-list"></div>`
      );
      this.listUserArray.push(
        new ListUser(
          $(`#user-list-${i}`),
          i,
          this.usersInfo[i].USER_ID,
          this.usersInfo[i].USER_NAME,
          this.usersInfo[i].USER_GRADE
        )
      );
    }
  };

  setUsersInfo = async () => {
    const results = await fetchAllUsers();
    if (results.message == "success") {
      this.usersInfo = results.data;
      this.listLength = results.data.length;
    } else {
      // 에러 처리
    }
  };

  setEvent = () => {
    this.userListContainer.addEventListener("click", e => {
      if (e.target.className == "user-grade-up-button") {
        const targetIdx = e.target.id.split("up-")[1];
        const userId = this.usersInfo[targetIdx].USER_ID;
        console.log(userId);
      }
      if (e.target.className == "user-grade-down-button") {
        const targetIdx = e.target.id.split("down-")[1];
        const userId = this.usersInfo[targetIdx].USER_ID;
      }
    });
  };

  async render() {
    this.parentElement.insertAdjacentHTML("beforeend", manageUserPageTemplate);
    this.userListContainer = $(".user-list-container");
    await this.setUsersInfo();
    this.setUserList();
    this.setEvent();
  }
}

export { ManageUserPage };
