const channelID = "UCZqBlVxhvvTwVpPzQE2Nvew";

const rssURL =
`https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`;

fetch(rssURL)
.then(response => response.json())
.then(data => {

    let html = "";

    data.items.slice(0,6).forEach(video => {

        html += `
        <div class="card">
            <img src="${video.thumbnail}">
            <h3>${video.title}</h3>

            <a href="${video.link}" target="_blank">
                ▶ Watch Video
            </a>
        </div>
        `;
    });

    document.getElementById("youtube-feed").innerHTML =
    `<div class="cards">${html}</div>`;

})
.catch(error => {

    document.getElementById("youtube-feed").innerHTML =
    "<p>Unable to load videos.</p>";

});
