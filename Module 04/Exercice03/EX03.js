const form = document.getElementById("search-form");
const queryInput = document.getElementById("query");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchTerm = queryInput.value.trim();
  if (searchTerm === "") {
    resultsDiv.innerHTML = "<p>Please type a series name.</p>";
    return;
  }

  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`;

  console.log("Searching for:", searchTerm);
  console.log("API URL:", url);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Full API response:", data);
      resultsDiv.innerHTML = "";

      if (!Array.isArray(data) || data.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
        return;
      }

      data.forEach(tvShow => {
        const show = tvShow.show;

        const article = document.createElement("article");

        const title = document.createElement("h2");
        title.textContent = show.name || "No name available";
        article.appendChild(title);

        if (show.url) {
          const link = document.createElement("a");
          link.href = show.url;
          link.target = "_blank";
          link.textContent = "View details";
          article.appendChild(link);
        }

        const imageUrl = show.image?.medium;
        if (imageUrl) {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = show.name || "TV show image";
          article.appendChild(img);
        }

        const summaryDiv = document.createElement("div");
        if (show.summary) {
          summaryDiv.innerHTML = show.summary;
        } else {
          summaryDiv.innerHTML = "<p>No summary available.</p>";
        }
        article.appendChild(summaryDiv);

        resultsDiv.appendChild(article);
      });
    })
    .catch(error => {
      console.error("Fetch error:", error);
      resultsDiv.innerHTML = "<p>There was an error loading results.</p>";
    });
});
