function addingEventListener() {
    // Select the input element with id="button"
    const input = document.getElementById("button");
  
    // Add a click event listener to the input element
    input.addEventListener("click", function () {
      alert("I was clicked!");
    });
  }
  
  // Call the function to activate the event listener
  addingEventListener();