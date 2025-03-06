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
  loadCategories();
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
    // When a meal is clicked, navigate to details page (meal.html)
    mealCard.addEventListener('click', () => {
      window.location.href = `meal.html?mealId=${meal.idMeal}`;
    });
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

// Change filter based on selected category
categorySelect.addEventListener('change', () => {
  if (categorySelect.value === 'All') {
    loadMeals();
  } else {
    fetchMealsByCategory(categorySelect.value);
  }
});


// Load meal categories into the dropdown filter
function loadCategories() {
  fetch(categoryListURL)
    .then(response => response.json())
    .then(data => {
      if (data.categories) {
        data.categories.forEach(category => {
          const option = document.createElement('option');
          option.value = category.strCategory;
          option.textContent = category.strCategory;
          categorySelect.appendChild(option);
        });
      }
    })
    .catch(error => console.error('Error fetching categories:', error));
}

// Fetch meals by selected category
function fetchMealsByCategory(category) {
  fetch(filterByCategoryURL + category)
    .then(response => response.json())
    .then(data => {
      if (data.meals) {
        displayMeals(data.meals);
      } else {
        mealGrid.innerHTML = `<p>No meals found in category "${category}".</p>`;
      }
    })
    .catch(error => console.error('Error fetching meals by category:', error));
}

// Fetch meals by search query 
function fetchMealsBySearch(query) {
  fetch(searchURL + query)
    .then(response => response.json())
    .then(data => {
      if (data.meals) {
        displayMeals(data.meals);
      } else {
        mealGrid.innerHTML = `<p>No meals found for "${query}".</p>`;
      }
    })
    .catch(error => console.error('Error fetching meals by search:', error));
}


// Search by meal name as user types
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  if (query !== '') {
    fetchMealsBySearch(query);
  } else {
    if (categorySelect.value === 'All') {
      loadMeals();
    } else {
      fetchMealsByCategory(categorySelect.value);
    }
  }
});