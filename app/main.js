import MySongsController from "./Controllers/MySongsController.js";
import SongsController from "./Controllers/SongsController.js";

class App {
  songsController = new SongsController();

  mySongsController = new MySongsController()
}

window["app"] = new App();
