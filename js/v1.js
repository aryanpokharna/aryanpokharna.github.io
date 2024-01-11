// Storing list of images in a constant
const images = document.getElementsByClassName("image"); 

let globalIndex = 0;
    lastCursor = {x: 0, y: 0};

const activate = (image, x, y) => {
    // Setting top and left of image at where the mouse pointer is.
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    // Putting the lead photo at the top
    image.style.zIndex = globalIndex;

    image.dataset.status = "active";
    lastCursor = {x, y};
}

// 120px Math Function
const distFromLast = (x, y) => {
    return Math.hypot(x - lastCursor.x, y - lastCursor.y);
}

const handleOnMove = e => {

    // Check if 80px movement has happened
    if (distFromLast(e.clientX, e.clientY) > 80) {
        const lead = images[globalIndex % images.length];

        // Determining which image to hide (tail) (5 image fixed)
        const tail = images[(globalIndex - 5) % images.length];

        // Passing in an image index, and mouse X, Y position
        activate(lead, e.clientX, e.clientY);

        // Deactivating
        if (tail) tail.dataset.status = "inactive";

        // Incrementing Counter
        globalIndex++;
    }
}

// Mouse & Touchscreen
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);