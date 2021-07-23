import { ProxyState } from "../AppState.js";
import songService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  const songs = ProxyState.songs
  let template = ''
  songs.forEach(s => template += `
    <div class="row bg-light border" >
      <div class="col-3 align-self-center">
        <img src="${s.albumArt}" class="action  w-100" alt="${s.album}" onclick="app.songsController.getActive(${s.id})">
        </div>
        <div class="col-9">
          <p>${s.title}</p>
          <p>${s.artist}</p>
        </div>
      </div>`)
  //  <div class="row card my-3 d-flex" style="width: 15rem; my-2">
  //   <img src="${s.albumArt}" class="action card-img-left" alt="${s.album}" onclick="app.songsController.getActive(${s.id})">
  //   <div class="card-body">
  //     <h5 class="card-title">${s.title}</h5>
  //     <p class="card-text">${s.artist}</p>
  //   </div>
  // </div>

  document.getElementById('songs').innerHTML = template
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() {

}

function _drawActiveSong() {
  if (!ProxyState.activeSong) {
    document.getElementById('active-song').innerHTML = `<div class="text-center">No Active Song</div>`
  }
  document.getElementById('active-song').innerHTML = ProxyState.activeSong.Template
}
//Public
export default class SongsController {
  constructor() {
    ProxyState.on('songs', _drawResults)
    ProxyState.on('activeSong', _drawActiveSong)
    //TODO Don't forget to register your listeners and get your data

  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      songService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) { }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) { }

  async getActive(id) {
    try {
      await songService.getActive(id)
    } catch (error) {
      console.error(error)
    }
  }
}
