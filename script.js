const summaryList = document.querySelector(".summary-list");
const getData = async function () {
  const response = await fetch("data.json");
  const data = await response.json();
  data.forEach(function (item) {
    const summaryListItem = document.createElement("li");
    summaryListItem.innerHTML = `<div class="summary-left">
    <img src="${item.icon}" class="summary-list-item-img">
    <h2>${item.category}</h2>
    </div>
    <div>
    <span class="summary-item-score">${item.score}</span>
    <span class="summary-item-total"> / 100</span>
    </div>
    `;

    summaryListItem.classList.add("summary-list-item");
    summaryList.append(summaryListItem);
  });
};

getData();
