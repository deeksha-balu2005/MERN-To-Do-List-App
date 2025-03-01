import CONFIG from "./config";

fetch(`${CONFIG.API_URL}/tasks`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));
