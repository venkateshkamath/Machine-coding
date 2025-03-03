const tabsData = [
  {
    id: 1,
    title: "Tab 1",
    content: "This is content for TAB 1",
  },
  {
    id: 2,
    title: "Tab 2",
    content: "This is content for TAB 2",
  },
  {
    id: 3,
    title: "Tab 3",
    content: "This is content for TAB 3",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let activeTab = tabsData[0]?.id;
  function renderTabs() {
    const tabContainer = document.querySelector("#tabContainer");
    const tabContentContainer = document.querySelector("#tabContentContainer");
    tabsData.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.className = "tabLinks";
      tabButton.textContent = tab.title;
      tabButton.setAttribute("data-tab", tab.id);
      tabContainer.appendChild(tabButton);
      const tabContent = document.createElement("div");
      tabContent.id = tab.id;
      tabContent.className = "tabContent";
      tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
      tabContentContainer.appendChild(tabContent);
    });

    tabContainer.addEventListener("click", (e) => {
      if (e.target.matches(".tabLinks")) {
        const tabId = e.target.getAttribute("data-tab");
        if (tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId;
        }
      }
    });
  }
  function openTab(tabId) {
    const tabContents = document.querySelectorAll(".tabContent");
    const tabLinks = document.querySelectorAll(".tabLinks");
    tabContents.forEach((ele) => {
      ele.classList.remove("active");
    });
    tabLinks.forEach((ele) => {
      ele.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
    document.querySelector(`button[data-tab="${tabId}"]`).classList.add("active");
  }
  renderTabs();
  document.getElementById(activeTab).classList.add("active");
  document.querySelector(`button[data-tab="${activeTab}"]`).classList.add("active");
});
