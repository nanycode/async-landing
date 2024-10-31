const API =
  'https://youtube-v31.p.rapidapi.com/search?channelId=UCtoo4_P6ilCj7jwa4FmA5lQ&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "72daf0e4c6msha2b2bdd1533cc8dp186fbcjsnc04ad11c77e2",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items
      .map(
        (video) => `
     <div class="group relative">
         <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rouded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h4>
        </div>
      </div>
    `
      )
      .slice(0, 48)
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
