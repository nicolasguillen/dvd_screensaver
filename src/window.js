export const CANVAS_WIDTH = 32
export const CANVAS_HEIGHT = 24
export const LOGO_WIDTH = 4
export const LOGO_HEIGHT = 2

/**
 * @param {HTMLCanvasElement} canvas
 * @param {HTMLImageElement} logo
 */
export function resizeCanvas(canvas, logo) {
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = Math.floor(width)
    canvas.height = Math.floor(height)

    const scaleFactor = Math.min(canvas.width / CANVAS_WIDTH, canvas.height / CANVAS_HEIGHT);
    logo.width = Math.floor(LOGO_WIDTH * scaleFactor)
    logo.height = Math.floor(LOGO_HEIGHT * scaleFactor)
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {HTMLImageElement} logo
 */
export function listenToChanges(canvas, logo) {
    window.addEventListener("resize", function() {
        resizeCanvas(canvas, logo);
    });
}
