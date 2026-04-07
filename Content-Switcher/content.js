const tabs = document.querySelectorAll(".tab");
const contentContainer = document.querySelector(".content-container");

const tabContent = {
  overview: {
    label: "Overview Content",
    desccription:
      "This is the overview section.Here we provide brief summary of the main topic.",
  },

  details: {
    label: "Details Content",
    desccription:
      "This is the details section.Here we provide brief summary of the main topic.",
  },

  reviews: {
    label: "Reviews Content",
    desccription:
      "This is the reviews section.Here we provide brief summary of the main topic.",
  },
};



tabs[0].classList.add("clicked");
GenerateHTML("overview");




tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    turnOffPreviousTab();
    tab.classList.add("clicked");

    const tabId = tab.dataset.id;
    GenerateHTML(tabId);
  });
});



function turnOffPreviousTab() {
  const clickedTab = document.querySelector(".clicked");

  if (clickedTab) {
    clickedTab.classList.remove("clicked");
  }
}



function GenerateHTML(tabId) {
  contentContainer.innerHTML = `
   <div class="content">
         <h2>${tabContent[tabId].label}</h2> 
      </div>     
      <div class="content-details">
        <p>${tabContent[tabId].desccription}</p>
      </div>
    </div>
   
  `;
}

 
