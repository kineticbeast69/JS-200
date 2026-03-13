const indian = document.getElementById("indian");
const chinese = document.getElementById("chinese");
const japanese = document.getElementById("japanese");
const french = document.getElementById("french");
const russian = document.getElementById("russian");
const mealContainer = document.querySelector(".meal-container");
const navClick = async (value = "indian") => {
  if (value === "indian") {
    indian.classList.add("navList");
    chinese.classList.remove("navList");
    japanese.classList.remove("navList");
    french.classList.remove("navList");
    russian.classList.remove("navList");
  } else if (value === "chinese") {
    chinese.classList.add("navList");
    indian.classList.remove("navList");
    japanese.classList.remove("navList");
    french.classList.remove("navList");
    russian.classList.remove("navList");
  } else if (value === "japanese") {
    japanese.classList.add("navList");
    chinese.classList.remove("navList");
    indian.classList.remove("navList");
    french.classList.remove("navList");
    russian.classList.remove("navList");
  } else if (value === "french") {
    french.classList.add("navList");
    chinese.classList.remove("navList");
    japanese.classList.remove("navList");
    indian.classList.remove("navList");
    russian.classList.remove("navList");
  } else if (value === "russian") {
    russian.classList.add("navList");
    chinese.classList.remove("navList");
    japanese.classList.remove("navList");
    french.classList.remove("navList");
    indian.classList.remove("navList");
  } else {
    document.querySelector(`#${value}`).classList.remove("navList");
  }

  try {
    const request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`,
    );
    const response = await request.json();
    console.log(response);
    mealContainer.innerHTML = "";
    showCards(response, value);
  } catch (error) {
    console.log(error);
  }
};

function showCards(response, value) {
  let cards = "";

  response.meals.forEach((meal) => {
    cards += `
      <div class="meal-card">
        <img src="${meal.strMealThumb}" alt="Meal"/>
        <div class="meal-info">
          <h3>${meal.strMeal}</h3>
          <p>Area: ${value}</p>
          <button onclick="viewRecipe(${meal.idMeal})">View Recipe</button>
        </div>
      </div>
    `;
  });

  mealBox.innerHTML = cards;
}

document.addEventListener("DOMContentLoaded", () => {
  navClick();
});
