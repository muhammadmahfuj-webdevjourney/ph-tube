// Main Functions

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

const loadCatagoryVideos = (id) => {
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    // When the response is received, parse it as JSON
    .then((res) => res.json())

    // When the JSON data is received, call the displayCategories function with the categories data
    .then((data) => displayVideos(data.category))

    // If there's an error, log it to the console
    .catch((error) => console.log(error));
};

const getTimeString = (time) => {
  // Time converted in seconds
  const secondsInYear = 31536000;
  const secondsInMonth = 2592000;
  const secondsInDay = 86400;
  const secondsInHour = 3600;
  const secondsInMinute = 60;

  // Calculate each time component based on remaining seconds
  const year = parseInt(time / secondsInYear);
  let remainingSecond = time % secondsInYear;

  const month = parseInt(remainingSecond / secondsInMonth);
  remainingSecond = remainingSecond % secondsInMonth;

  const day = parseInt(remainingSecond / secondsInDay);
  remainingSecond = remainingSecond % secondsInDay;

  const hour = parseInt(remainingSecond / secondsInHour);
  remainingSecond = remainingSecond % secondsInHour;

  const minute = parseInt(remainingSecond / secondsInMinute);
  remainingSecond = remainingSecond % secondsInMinute;

  // Build the time string only with relevant parts
  let timeString = "";

  // if (year > 0) timeString += `${year} year `;
  // if (month > 0) timeString += `${month} month `;
  // if (day > 0) timeString += `${day} day `;
  // if (hour > 0) timeString += `${hour} hour `;
  // if (minute > 0) timeString += `${minute} minute `;
  // if (remainingSecond > 0 || timeString === "")
  //   timeString += `${remainingSecond} second `;

  timeString += year > 0 ? `${year} y ` : "";
  timeString += month > 0 ? `${month} m ` : "";
  timeString += day > 0 ? `${day} d ` : "";
  timeString += hour > 0 ? `${hour} h ` : "";
  timeString += minute > 0 ? `${minute} m ` : "";
  timeString +=
    remainingSecond > 0 || timeString === "" ? `${remainingSecond} s ` : "";

  return timeString.trim() + " ago";
};

// Functionality

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
  description: "'Inside Amy Schumer'",
};

const displayVideos = (videos) => {
  // Get a reference to the HTML element with the id "categories"
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = "";

  if (videos.length == 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `
      <div class = "min-h-[500px] flex flex-col gap-5 justify-center items-center">
        <img src = "./assets/Icon.png" />
        <h2 class="text-center text-xl font-bold">No Content here in this Category</h2>
      </div>
    `;

    return;
  } else {
    videoContainer.classList.add("grid");
  }

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
                class="w-full h-full object-cover"
            />
                ${
                  video.others.posted_date?.length == 0
                    ? ""
                    : `<span class="absolute text-white text-sm w-32 lg:w-fit bg-black rounded-lg right-2 bottom-2 px-2 py-1">
                          ${getTimeString(video.others.posted_date)}
                        </span>`
                }
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
    const buttonContainer = document.createElement("div");

    buttonContainer.innerHTML = `
      <button onclick ="loadCatagoryVideos(${item.category_id})" class="btn">
      ${item.category}
      </button>
    `;

    // Set the text content of the button element to the category name
    // button.innerText = item.category;

    // Append the button element to the categories container element
    categoriesContainer.append(buttonContainer);
  });
};

// Call the loadCategories function to start the process
loadCategories();
loadVideos();
