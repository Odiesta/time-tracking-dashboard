const cardContainer = document.getElementById("card-container");

const appendItem = (item) => {
  const card = document.createElement("div");
  if (item.title === "Work") {
    item = { ...item, iconName: "work", bgColor: "orange" };
  } else if (item.title === "Play") {
    item = { ...item, iconName: "play", bgColor: "blue" };
  } else if (item.title === "Study") {
    item = { ...item, iconName: "study", bgColor: "pink" };
  } else if (item.title === "Exercise") {
    item = { ...item, iconName: "exercise", bgColor: "green" };
  } else if (item.title === "Social") {
    item = { ...item, iconName: "social", bgColor: "purple" };
  } else if (item.title === "Self Care") {
    item = { ...item, iconName: "self-care", bgColor: "yellow" };
  }

  card.innerHTML = `
    <div class="card">
      <div class="card__banner card__banner--${item.bgColor}">
        <img
          src="images/icon-${item.iconName}.svg"
          alt="icon ${item.iconName}"
          class="card__banner-img"
        />
      </div>
      <div class="card__container">
        <div class="card__header">
          <h3 class="card__activity">${item.title}</h3>
          <img
            src="images/icon-ellipsis.svg"
            alt="ellipsis image"
            class="card__ellipsis"
          />
        </div>
        <div class="card__body">
          <h2 class="card__time">${item.timeframes.weekly.current}hrs</h2>
          <p class="card__previous-time">Last Week - ${item.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
    </div>
  `;
  cardContainer.appendChild(card);
};

const populateDOM = (data) => {
  data.forEach((item) => {
    appendItem(item);
  });
};

fetch("data.json")
  .then((response) => {
    if (!response.ok) return console.log("Oops! Something went wrong!");

    return response.json();
  })
  .then((data) => {
    populateDOM(data);
  });

/*

1. ambil data cardContainer yang id nya card-container
2. buat fungsi untuk menambah item card
3. buat fungsi untuk populate data
4. buat fungsi untuk fetch data dari json

*/
