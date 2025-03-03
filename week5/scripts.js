// API Endpoints from TheMealDB
const searchURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const categoryListURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const filterByCategoryURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const mealGrid = document.getElementById('mealGrid');

// Load initial data when the page is ready
window.addEventListener('DOMContentLoaded', () => {
  loadMeals();
});

// Render meals in the grid
function displayMeals(meals) {
  mealGrid.innerHTML = '';
  meals.forEach(meal => {
    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card');
    mealCard.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="meal-info">
        <h3>${meal.strMeal}</h3>
      </div>
    `;
    mealGrid.appendChild(mealCard);
  });
}

// Fetch meals using an empty search to return default meals
function loadMeals() {
    fetch(searchURL)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          displayMeals(data.meals);
        } else {
          mealGrid.innerHTML = '<p>No meals found.</p>';
        }
      })
      .catch(error => console.error('Error fetching meals:', error));
}

if (categorySelect.value === 'All') {
    loadMeals();
  }

