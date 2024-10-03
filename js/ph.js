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
        <figure class="h-[250px] relative">
            <img
                src=${video.thumbnail}
                class="w-full h-full object-cover"/>
            <span class="absolute text-white bg-black rounded-lg right-2 bottom-2 px-2 py-1">
              ${video.others.posted_date}
            </span>
        </figure>
        <div class="px-0 py-3 flex gap-3">
            <div>
              <img 
                src=${video.authors[0].profile_picture}
                class="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div>
              <h2 class="font-bold">${video.title}</h2>
              <div class="flex items-center gap-2">
                <p class="text-gray-400">${video.authors[0].profile_name}</p>
                ${
                  video.authors[0].verified == true
                    ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />`
                    : ""
                } 
              </div>
              <p></p>
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
