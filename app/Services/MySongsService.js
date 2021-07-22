import { ProxyState } from "../AppState.js";
import Song from "../Models/Song.js";
import { sandBoxApi } from "./AxiosService.js";
import { itunesApi } from "./AxiosService.js"

class MySongsService {

  async getMySongs() {
    const res = await sandBoxApi.get()
    console.log(res.data)
    ProxyState.playlist = res.data.map(s => new Song(s))
  }
  async addSong() {
    const res = await sandBoxApi.post('', ProxyState.activeSong)
    console.log(res.data);
    const mySong = new Song(res.data)
    ProxyState.playlist = [...ProxyState.playlist, mySong]
    ProxyState.activeSong = mySong
  }

}

export const mySongsService = new MySongsService()