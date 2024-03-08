// Fetch a random image from the Unsplash API
function fetchRandomImage() {
    fetch('https://api.unsplash.com/photos/random?client_id=YOUR_UNSPLASH_ACCESS_KEY')
      .then(response => response.json())
      .then(data => {
      
      console.log(data)
        const imageUrl = data.urls.regular;
        const previewImage = document.getElementById('preview-image');
        previewImage.src = imageUrl;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  // Call the fetchRandomImage function to display a random image initially
  fetchRandomImage();
  