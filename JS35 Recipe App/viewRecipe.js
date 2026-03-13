const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");
const image = document.getElementById("recipeImg");
const recipeTitle = document.getElementById("recipeTitle");
const videoLink = document.getElementById("youtubeLink");
const ingredientList = document.getElementById("ingredientList");
const instruction = document.getElementById("recipeInstructions");

const viewRecipe = async (id) => {
  modal.style.display = "flex";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  try {
    const query = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const response = await query.json();
    // console.log(response);
    showRecipe(response.meals[0]);
  } catch (error) {
    console.log(error);
  }
};

function showRecipe(meals) {
  image.src = meals.strMealThumb;
  recipeTitle.innerText = meals.strMeal;
  videoLink.href = meals.strYoutube;
  instruction.innerText = meals.strInstructions;

  for (let i = 1; i < 20; i++) {
    const ingredient = meals[`strIngredient${i}`];
    const measure = meals[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      const li = document.createElement("li");
      li.innerHTML = `${ingredient}-${measure}`;
      ingredientList.appendChild(li);
    }
  }
}
