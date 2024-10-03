// Define a function called loadCategories that fetches categories from an API
const loadCategories = () => {
  // Use the fetch API to make a GET request to the API endpoint
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // When the response is received, parse it as JSON
    .then((res) => res.json())

    // When the JSON data is received, call the displayCategories function with the categories data
    .then((data) => displayCategories(data.categories))

    // If there's an error, log it to the console
    .catch((error) => console.log(error));
};

const loadVideos = () => {
  // Use the fetch API to make a GET request to the API endpoint
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    // When the response is received, parse it as JSON
    .then((res) => res.json())

    // When the JSON data is received, call the displayCategories function with the categories data
    .then((data) => displayCategories(data.videos))

    // If there's an error, log it to the console
    .catch((error) => console.log(error));
};

const displayVideos = (videos) => {
  // Get a reference to the HTML element with the id "categories"
  const categoriesContainer = document.getElementById("videos");

  // Log the categories array to the console (for debugging purposes)
  console.log(videos);

  // Loop through each item in the categories array
  categories.forEach((item) => {
    // Create a new HTML button element
    const card = document.createElement("div");
    card.innerHTML = `
        <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
      `;

    // Add a class of "btn" to the button element
    button.classList = "btn";

    // Set the text content of the button element to the category name
    button.innerText = item.category;

    // Append the button element to the categories container element
    categoriesContainer.append(button);
  });
};

// Define a function called displayCategories that takes an array of categories as an argument

const displayCategories = (categories) => {
  // Get a reference to the HTML element with the id "categories"
  const categoriesContainer = document.getElementById("categories");

  // Log the categories array to the console (for debugging purposes)
  console.log(categories);

  // Loop through each item in the categories array
  categories.forEach((item) => {
    // Create a new HTML button element
    const button = document.createElement("button");

    // Add a class of "btn" to the button element
    button.classList = "btn";

    // Set the text content of the button element to the category name
    button.innerText = item.category;

    // Append the button element to the categories container element
    categoriesContainer.append(button);
  });
};

// Call the loadCategories function to start the process
loadCategories();
