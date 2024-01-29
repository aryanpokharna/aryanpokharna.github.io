document.addEventListener('DOMContentLoaded', function () {
    var circleType = new CircleType(document.getElementById('circle-type'));
    var container = document.getElementById('circle-type-container');
    var mouseX = 0, mouseY = 0;
    var scrollY = 0;
    var cursor = document.getElementById('cursor');

    function circlePosition(e) {
        if (e.type === 'mousemove') {
            mouseX = e.clientX;
            mouseY = e.clientY;
        } else if (e.type === 'scroll') {
            scrollY = window.scrollY;
        }

        requestAnimationFrame(updatePosition);
    }

        // console.log(mouseX, mouseY, scrollX, scrollY, container.style.top, container.style.left);

    function updatePosition() {
        container.style.position = 'absolute';
        container.style.top = mouseY + scrollY + 'px';
        container.style.left = mouseX + 'px';
        container.style.transform = 'translate(-50%, -50%) rotate(' + scrollY + 'deg)';

        cursor.style.position = 'absolute';
        cursor.style.top = mouseY + scrollY  - cursor.offsetHeight / 2 + 'px';
        cursor.style.left = mouseX - cursor.offsetWidth / 2 + 'px';

    }

    window.addEventListener('mousemove', circlePosition);
    window.addEventListener('scroll', circlePosition);

    const stickySections = [...document.querySelectorAll('.sticky')];

    let images = [
        'assets/logo/cache/cache_orange.png',
        'assets/logo/cottonsocks/cottonsocks_light_2.png',
        'assets/logo/familydinner/familydinner_logos.jpeg',
        'assets/logo/thirdspace/thirdspace-ss-2.png',
        'assets/logo/when2holiday/when2holiday.png',
    ];

    images.forEach(img => {
        stickySections.forEach(section => {
            let image = document.createElement('img');
            image.src = img;
            section.querySelector('.scroll_section').appendChild(image);
        });
    });

    window.addEventListener('scroll', (e) => {
        for(let i = 0; i < stickySections.length; i++) {
            transform(stickySections[i]);
        };
    });

    function transform(section) {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.scroll_section');
        let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
        scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
    };

    let row_images = [
        'assets/img/adrian.jpg',
        'assets/img/capri.jpg',
        'assets/img/geneva_postcard.jpg',
        'assets/img/athens.jpeg',
        'assets/img/bellagio.jpg',
        'assets/img/jervis_bay_postcard.jpg',
        'assets/img/jervis_bay_film_2.jpg',
        'assets/img/london.jpg',
        'assets/img/lisbon_postcard.jpg',
        'assets/img/utrecht_film_2.jpg',
        'assets/img/naxos.jpg',
        'assets/img/vatican.jpg',
        'assets/img/malta.jpg',
        'assets/img/sorrento_postcard.jpg',
        'assets/img/utrecht_film.jpg',
        'assets/img/jervis_bay_film.jpg',
        'assets/img/utrecht_postcard.jpg',
        'assets/img/naxos_postcard_lower.jpg',
        'assets/img/victoria.jpg',
        'assets/img/vienna.jpg',
    ];

    const columns = [...document.querySelectorAll('.col')];

    columns.forEach((column, columnIndex) => {
        for (let i = 0; i < 4; i++) {
            let image = document.createElement('img');
            let imageIndex = columnIndex * 4 + i;
            image.src = row_images[imageIndex];
            column.appendChild(image);
        }
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const cursor = document.getElementById('cursor');

//     // Add mousemove event listener to track the cursor
//     document.addEventListener('mousemove', function (e) {
//         // Get the element at the mouse position
//         const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

//         console.log(hoveredElement.classList)

//         // Check if the hovered element is an image with the 'hover-image' class
//         if (hoveredElement && hoveredElement.classList.contains('img')) {
//             // Get the background color of the hovered image
            
//             const bgColor = getComputedStyle(hoveredElement).backgroundColor;

//             // Set the cursor's background color to the image's background color
//             cursor.style.backgroundColor = bgColor;
//         } else {
//             // If not hovering over an image, set default color
//             cursor.style.backgroundColor = 'white'; // Default color
//         }
//     });
// });