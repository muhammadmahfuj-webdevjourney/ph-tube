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
    .then((data) => displayVideos(data.videos))

    // If there's an error, log it to the console
    .catch((error) => console.log(error));
};

const demoCard = {
  category_id: "1003",
  video_id: "aaae",
  thumbnail: "https://i.ibb.co/Yc4p5gD/inside-amy.jpg",
  title: "Inside Amy Schumer",
  authors: [
    {
      profile_picture: "https://i.ibb.co/YD2mqH7/amy.jpg",
      profile_name: "Amy Schumer",
      verified: "",
    },
  ],
  others: {
    views: "3.6K",
    posted_date: "15147",
  },
  description:
    "'Inside Amy Schumer' is a comedy show by the popular comedian Amy Schumer, blending sharp satire and unfiltered humor to tackle everyday issues and societal norms. With 3.6K views, the show promises a blend of hilarious sketches, thought-provoking stand-up, and candid interviews. It's a must-watch for fans of bold, edgy comedy.",
};

const displayVideos = (videos) => {
  // Get a reference to the HTML element with the id "categories"
  const videoContainer = document.getElementById("videos");

  // Loop through each item in the categories array
  videos.forEach((video) => {
    console.log(video);

    // Create a new HTML button element
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
        <figure>
            <img 
                src=${video.thumbnail} />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${video.title}</h2>
            <p>${video.description}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
      `;

    // Append the button element to the categories container element
    videoContainer.append(card);
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
loadVideos();
