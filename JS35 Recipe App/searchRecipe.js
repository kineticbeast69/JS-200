const form = document.getElementById("form");
const inputValue = document.querySelector("#inputValue");
const banner = document.getElementsByClassName("banner")[0];
const mealBox = document.querySelector(".meal-container");

const handleSubmit = async (e) => {
  e.preventDefault();
  const value = inputValue.value.trim();
  if (value === "") return alert("Please write some recipe name.");
  //   console.log(value);
  try {
    mealBox.innerHTML = "";
    const query = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`,
    );
    const response = await query.json();
    console.log(response);
    if (response.meals === null) {
      banner.innerText = "No Recipe Found.";
      return;
    }

    // cards display code
    showCards(response);
  } catch (error) {
    console.log(error);
  }
};

function showCards(response) {
  banner.style.display = "none";

  response.meals.forEach((meal) => {
    const cards = document.createElement("div");
    cards.classList.add("meal-card");
    cards.innerHTML += `
          <img
            src="${meal.strMealThumb}"
            alt="Meal"
          />
          <div class="meal-info">
            <h3>${meal.strMeal}</h3>
            <p>Category: ${meal.strCategory}</p>
            <p>Area: ${meal.strArea}</p>
            <button onclick="viewRecipe(${meal.idMeal})">View Recipe</button>
          </div>`;
    mealBox.appendChild(cards);
  });
}

form.addEventListener("submit", handleSubmit);
