import { ProxyState } from "../AppState.js";
import { mySongsService } from "../Services/MySongsService.js";

function _drawMySongs() {
  const songs = ProxyState.playlist
  const activeSong = ProxyState.activeSong
  let template = ''
  songs.forEach(s => template += `<li>${activeSong.title}</li>`)
  if (!template) {
    template += `<p>No songs in the playlist</p>`
  }
  document.getElementById('playlist').innerHTML = template
}
export default class MySongsController {
  constructor() {
    ProxyState.on('playlist', _drawMySongs)

    this.getMySongs()
  }
  async getMySongs() {
    try {
      await mySongsService.getMySongs()
    } catch (error) {
      console.error(error)
    }
  }

  async addSong() {
    try {
      await mySongsService.addSong()
    } catch (error) {
      console.error(error)
    }
  }

  async removeSong() {
    try {
      await mySongsService.removeSong()
    } catch (error) {
      console.log(error)

    }
  }
}