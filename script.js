// Get all the collapsible tabs
var collapsibleTabs = document.querySelectorAll(".collapsible-tab");

// Loop through all the collapsible tabs
for (var i = 0; i < collapsibleTabs.length; i++) {
  // Add a click event listener to each tab's button
  collapsibleTabs[i].querySelector(".collapsible-button").addEventListener("click", function() {
    // Toggle the 'active' class on the button when clicked
    this.classList.toggle("active");
    // Get the content associated with the button
    var content = this.nextElementSibling;
    // Toggle the 'show' class on the content
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

