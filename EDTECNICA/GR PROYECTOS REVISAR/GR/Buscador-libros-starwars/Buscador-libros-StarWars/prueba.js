// Function to create an image element and append it to a specified element
function createImageElement(image, parentElement) {
    let img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.className = "my-image-class"; // Add the CSS class to the image
    parentElement.appendChild(img);
  }
  
  // Function to display the elements with their respective images
  function displayElementsWithImages() {
    let container = document.getElementById("container");
  
    elements.forEach(function (image) {
      createImageElement(image, container);
    });
  }
  
  // Call the function to display the elements with their respective images
  displayElementsWithImages();