const form = document.getElementById('search-form');
const queryInput = document.getElementById('query');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const query = queryInput.value.trim();
  if (query === "") {
    console.log("Please enter a TV series name.");
    return;
  }

  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

  console.log("Searching for:", query);
  console.log("API Request:", url);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.clear();
      console.log("Full API response:", data);

      if (data.length === 0) {
        console.log("No results found.");
        return;
      }

      data.forEach((item, index) => {
        const show = item.show;
        console.log(`---- Result ${index + 1} ----`);
        console.log("Name:", show.name);
        console.log("Language:", show.language);
        console.log("Genres:", show.genres);
        console.log("Premiered:", show.premiered);
        console.log("Official Site:", show.officialSite);
        console.log("Summary:", show.summary);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});
