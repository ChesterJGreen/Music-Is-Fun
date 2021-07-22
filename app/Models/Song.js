export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100 || data.artworkUrl30
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId || data._id;
  }

  get Template() {
    return `<div class="card my-3" style="width: 18rem; my-2">
    <img src="${this.albumArt}" class="action card-img-left" alt="${this.album}">
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <p class="card-text">${this.artist}</p>
      <audio controls>
        <source src="${this.preview}" type="audio/m4a">
      </audio>
      <button type="button" class="btn btn-info" onclick="app.mySongsController.addSong()">Get Song</button>

    </div>
  </div>

        `;
  }

  get playlistTemplate() {
    return `

        `;
  }
}
