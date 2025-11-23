const form = document.getElementById("search-form");
const queryInput = document.getElementById("query");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const searchTerm = queryInput.value.trim();

  if (searchTerm === "") {
    console.log("Please type a series name.");
    return;
  }

  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`;

  console.log("Searching for:", searchTerm);
  console.log("API URL:", url);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.clear();
      console.log("Full TVMaze API Result:", data);

      if (data.length === 0) {
        console.log("No results found.");
      }
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
});
