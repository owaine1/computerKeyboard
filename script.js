var img = new Image,
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

/// change to this color
ctx.fillStyle = '#0ff';

/// load image, when ready render it with new color
img.onload = render;
img.src = 'unicorn.gif';

function render() {
    /// this composite mode clears the canvas as well
    ctx.globalCompositeOperation = 'copy';
    ctx.drawImage(img, 20, 20);

    /// this mode fills in whatever, in the image
    ctx.globalCompositeOperation = 'source-in';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
