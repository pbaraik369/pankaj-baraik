// // Function to handle drag start event
// function dragStart(event) {
//   event.dataTransfer.setData("text/plain", event.target.alt);
//   event.target.parentNode.classList.add("dragging");

//   // Add custom drag feedback styles
//   event.target.style.opacity = "0.5";
//   event.target.style.transform = "scale(1.2)";
// }

// // Function to handle drag end event
// function dragEnd(event) {
//   event.target.parentNode.classList.remove("dragging");

//   // Reset drag feedback styles
//   event.target.style.opacity = "1";
//   event.target.style.transform = "scale(1)";
// }

// // Function to handle drag over event
// function dragOver(event) {
//   event.preventDefault();
// }

// // Function to handle drop event
// function drop(event) {
//   event.preventDefault();
//   const data = event.dataTransfer.getData("text/plain");
//   const container2 = document.getElementById("container2");
//   const newItem = document.createElement("img");
//   newItem.textContent = data;
//   container2.appendChild(newItem);
//   event.target.classList.remove("dragging");

//   // Display success message or update UI
//   const successMessage = document.getElementById("successMessage");
//   successMessage.textContent = "Item dropped successfully!";
//   successMessage.style.display = "block";
// }

// // Function to reset containers and remove dropped items
// function resetContainers() {
//   const container1 = document.getElementById("container1");
//   const container2 = document.getElementById("container2");
//   container2.innerHTML = "";
//   container1.querySelectorAll(".dragging").forEach((item) => {
//     item.classList.remove("dragging");
//   });
// }

// var draggableItems = document.querySelectorAll(".draggable-item");
// var dropArea = document.getElementById("dropArea");

// // Event listeners for drag and drop events
// draggableItems.forEach(function (item) {
//   item.addEventListener("dragstart", dragStart);
// });

// dropArea.addEventListener("dragover", dragOver);
// dropArea.addEventListener("drop", drop);

// // Drag start event handler
// function dragStart(event) {
//   // Set the data transfer with the dragged image source
//   event.dataTransfer.setData("text/plain", event.target.src);
// }

// // Drag over event handler
// function dragOver(event) {
//   // Prevent default to allow drop
//   event.preventDefault();
// }

// // Drop event handler
// function drop(event) {
//   // Prevent default handling
//   event.preventDefault();

//   // Get the dragged image source
//   var draggedImageSrc = event.dataTransfer.getData("text/plain");

//   // Create an image element with the dragged image
//   var draggedImage = document.createElement("img");
//   draggedImage.src = draggedImageSrc;
//   draggedImage.classList.add("draggable-item");

//   // Append the dragged image to the drop area
//   event.target.appendChild(draggedImage);

//   // Display success message or update UI
//   const successMessage = document.getElementById("successMessage");
//   successMessage.textContent = "Item dropped successfully!";
//   successMessage.style.display = "block";
// }

// // Function to reset containers and remove dropped items
// function resetContainers() {
//   const container1 = document.getElementById("container-left");
//   const container2 = document.getElementById("container-right");
//   container2.innerHTML = "";
//   container1.querySelectorAll(".dragging").forEach((item) => {
//     item.classList.remove("dragging");
//   });
// }

var draggableItems = document.querySelectorAll(".draggable-item");
var dropArea = document.getElementById("dropArea");
var resetButton = document.getElementById("resetBtn");
var message = document.getElementById("message");

// Event listeners for drag and drop events
draggableItems.forEach(function (item) {
  item.addEventListener("dragstart", dragStart);
});

dropArea.addEventListener("dragover", dragOver);
dropArea.addEventListener("drop", drop);

resetButton.addEventListener("click", reset);

// Drag start event handler
function dragStart(event) {
  // Set the data transfer with the dragged image source
  event.dataTransfer.setData("text/plain", event.target.src);
}

// Drag over event handler
function dragOver(event) {
  // Prevent default to allow drop
  event.preventDefault();
}

// Drop event handler
function drop(event) {
  // Prevent default handling
  event.preventDefault();

  // Get the dragged image source
  var draggedImageSrc = event.dataTransfer.getData("text/plain");

  // Create an image element with the dragged image
  var draggedImage = document.createElement("img");
  draggedImage.src = draggedImageSrc;
  draggedImage.classList.add("draggable-item");

  // Append the dragged image to the drop area
  event.target.appendChild(draggedImage);

  // Show success message
  message.textContent = "Item dropped successfully!";
}

// Reset button click event handler
function reset() {
  // Clear the drop area
  dropArea.innerHTML = "Drop here!";

  // Clear success message
  message.textContent = "";
}


