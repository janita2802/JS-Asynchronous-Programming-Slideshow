const movieImages = [
    "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "https://image.tmdb.org/t/p/original/vDHsLnOWKlPGmWs0kGfuhNF4w5l.jpg",
    "https://image.tmdb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    "https://image.tmdb.org/t/p/original/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
    "https://image.tmdb.org/t/p/original/pSh8MyYu5CmfyWEHzv8FEARH2zq.jpg",
    "https://image.tmdb.org/t/p/original/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg",
    "https://image.tmdb.org/t/p/original/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg",
    "https://image.tmdb.org/t/p/original/3cccEF9QZgV9bLWyupJO41HSrOV.jpg",
    "https://image.tmdb.org/t/p/original/zByhtBvX99ZiCQhac1sh9d9r6nb.jpg",
    "https://image.tmdb.org/t/p/original/wYihSXWYqN8Ejsdut2P1P0o97N0.jpg",
    "https://image.tmdb.org/t/p/original/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg",
    "https://image.tmdb.org/t/p/original/aw4GGsRwhQtyLsjzC7dsAahfCDY.jpg",
    "https://image.tmdb.org/t/p/original/680klE0dIreQQOyWKFgNnCAJtws.jpg",
    "https://image.tmdb.org/t/p/original/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
    "https://image.tmdb.org/t/p/original/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
    "https://image.tmdb.org/t/p/original/meRIRfADEGVo65xgPO6eZvJ0CRG.jpg",
    "https://image.tmdb.org/t/p/original/i0z8g2VRZP3dhVvvSMilbOZMKqR.jpg",
    "https://image.tmdb.org/t/p/original/onGdT8sYi89drvSJyEJnft97rOq.jpg",
    "https://image.tmdb.org/t/p/original/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
    "https://image.tmdb.org/t/p/original/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg"
];

// Function to get a random image from the data
function getRandomImage() {
    return movieImages[Math.floor(Math.random() * movieImages.length)];
};

// Function to create the slideshow image element
function createSlideImage(imageUrl) {
    const image = document.createElement("img");
    image.src = imageUrl;
    image.classList.add("slide-image");
    return image;
};

// Function to display the slideshow
function startSlideshow() {
  let currentImageIndex = 0;

  // Set the first image as default
  const slideshowContainer = document.getElementById("slideshow");
  slideshowContainer.appendChild(createSlideImage(movieImages[currentImageIndex]));

  // Change image every 2 seconds using setInterval
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % movieImages.length; // Wrap around to first image
    slideshowContainer.innerHTML = ""; // Clear previous image
    slideshowContainer.appendChild(createSlideImage(movieImages[currentImageIndex]));
  }, 2000);
}
// startSlideshow()
window.addEventListener("DOMContentLoaded", startSlideshow);
