import { clearPage } from "./display-tasks";

import createHomepage from "./home-page";
import createTodayPage from "./today-page";
import createThisWeekPage from "./this-week-page";
import {
  createProjectsPage,
  refreshProjectsTitleAttributes,
  refreshProjects,
} from "./projects-page";
import "./styles/style.css";
import githubSvgIcon from "../src/styles/images/github-svgrepo-com.svg";
import { checkIfLocalStorageIsEmpty } from "./local-storage-manager";
import { addProject, setTask } from "./information-holder";

setDefaults();
function setDefaults() {
  if (checkIfLocalStorageIsEmpty() === true) {
    setTask(
      "Send email",
      "tell the boss its been done.",
      "2022-09-04",
      "1",
      undefined
    );
    setTask(
      "Milk",
      "Get some on the way home from work",
      "2022-09-12",
      "3",
      undefined,
      "yes"
    );
    setTask("Laundry", "use the tide", "2022-09-08", "3", undefined);

    setTask(
      "Wash dishes",
      "Use hot water this time",
      "2022-09-04",
      "2",
      "Chores",
      "yes"
    );
    setTask("Sweep the floor", "You already know", "2022-09-04", "", "Chores");
    addProject("Chores");
  }
}
createHomepage();
formatTabs();
refreshProjects();

function formatTabs() {
  const tabs = document.querySelectorAll("[data-tab-id]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      refreshProjectsTitleAttributes();
      let tabIndex = tab.getAttribute("data-tab-id");
      if (tabIndex === "3") {
        createProjectsPage();
        return;
      }
      clearPage();

      if (tabIndex === "0") {
        createHomepage();
      }
      if (tabIndex === "1") {
        createTodayPage();
        addGithub();
      }
      if (tabIndex === "2") {
        createThisWeekPage();
        addGithub();
      }
    });
  });
}

function addGithub() {
  const githubSection = document.createElement("div");
  githubSection.classList.add("github-section");

  const githubName = document.createElement("div");
  githubName.classList.add("github-name");
  githubName.textContent = "Copyright © 2022 Tewolden";
  githubSection.appendChild(githubName);

  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", "https://github.com/Tewolden");

  const githubIcon = document.createElement("img");
  githubIcon.src = githubSvgIcon;

  githubLink.appendChild(githubIcon);
  githubSection.appendChild(githubLink);

  content.appendChild(githubSection);
}
