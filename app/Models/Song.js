import { ProxyState } from "../AppState.js";

export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300")
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId || data._id;
    this.kind = data.kind
    this.wrapperType = data.wrapperType

    if (data.kind = "music") { return data.kind } { }
    if (data.wrapperType != "audiobook") { return data } { }
  }


  get Template() {
    return `<div class="card my-3" style="width: auto; my-2">
    <img src="${this.albumArt}" class="action card-img-left" alt="${this.album}">
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <p class="card-text">${this.artist}</p>
      <audio src="${this.preview}" type="audio/mpeg" controls>
      
      </audio>
      ${this.Button}

    </div>
  </div>

        `;
  }

  get Button() {
    const exists = ProxyState.playlist.find(s => s.id === ProxyState.activeSong.id)
    if (this.id) {
      return `
    <button type="button" class="btn btn-info" ${exists ? 'disabled' : ''} onclick="app.mySongsController.addSong()">Get Song</button>`;
    }
    return `<button type="button" class="btn btn-danger" onclick="app.mySongsController.removeSong()">Remove</button>`
  }
}
