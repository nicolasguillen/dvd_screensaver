/**
 * @param {HTMLCanvasElement} canvas
 * @param {HTMLImageElement} logo
 */
export function startGame(canvas, logo) {
    const context = canvas.getContext("2d");
    context.imageSmoothingEnabled = false;

    const speed = 5;
    const direction = [1, 1]

    let x = 20;
    let y = 20;
    let color = getRandomHexColor();
    setInterval(() => {
        const imageHeight = logo.height
        const imageWidth = logo.width

        context.clearRect(0, 0, canvas.width, canvas.height);

        const currentDirection = [direction[0], direction[1]];

        if (x + imageWidth >= canvas.width) {
            direction[0] = -1;
        } else if (x <= 0) {
            direction[0] = 1;
        }
        if (y + imageHeight >= canvas.height) {
            direction[1] = -1;
        } else if (y <= 0) {
            direction[1] = 1;
        }

        x += speed * direction[0];
        y += speed * direction[1];

        const didChangeDirection = currentDirection[0] != direction[0] || currentDirection[1] != direction[1];
        if (didChangeDirection) {
            color = getRandomHexColor();
        }

        context.drawImage(logo, x, y, imageWidth, imageHeight);

        context.globalCompositeOperation = 'source-atop';
        context.fillStyle = color;
        context.fillRect(x, y, imageWidth, imageHeight);
        context.globalCompositeOperation = 'source-over';
    }, 33);
}

function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}
