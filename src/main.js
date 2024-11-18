import { startGame } from "./game.js";
import { resizeCanvas, listenToChanges } from "./window.js"

const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("game_canvas"))

const image = new Image();
image.src = "/src/dvd_logo.png";
image.onload = () => {
    listenToChanges(canvas, image);
    resizeCanvas(canvas, image);
    startGame(canvas, image);
}
