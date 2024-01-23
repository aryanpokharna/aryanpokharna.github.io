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
        'https://dr.savee-cdn.com/things/6/5/9b7a86a89c0cfd224c5bdd.webp',
        'https://dr.savee-cdn.com/things/6/5/9c23635b554afd05fb5273.webp',
        'https://dr.savee-cdn.com/things/6/5/9c240c531dee3927eb256d.webp',
        'https://dr.savee-cdn.com/things/6/5/9c9821a1ef2bab5ad4e2bf.webp'
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
        scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`

    };

    let row_images = [
        './assets/img/1.jpg',
        './assets/img/2.jpg',
        './assets/img/3.jpg',
        './assets/img/4.jpg',
        './assets/img/6.jpg',
        './assets/img/7.jpg',
        'https://dr.savee-cdn.com/things/6/5/9c9821a1ef2bab5ad4e2bf.webp',
        'https://dr.savee-cdn.com/things/6/0/9dc4a1ab05ece5b554574a.webp',
        'https://dr.savee-cdn.com/things/6/4/c3edf6482c277e41c048a4.webp',
        'https://dr.savee-cdn.com/things/5/e/8e20868ee0b2334d2253be.webp',
        'https://dr.savee-cdn.com/things/6/4/e8ef4f95fa736d8a104d28.webp',
        'https://dr.savee-cdn.com/things/6/5/8bf91c60d4d9811768c975.webp',
        'https://dr.savee-cdn.com/things/6/4/e629fd96a5e53a15256267.webp',
        'https://dr.savee-cdn.com/things/6/5/8ea5ce0a99193bc53f68ee.webp',
        'https://dr.savee-cdn.com/things/5/f/fc40b82a8ac231b6e90c04.webp',
        'https://dr.savee-cdn.com/things/6/5/9b7a86a89c0cfd224c5bdd.webp',
        'https://dr.savee-cdn.com/things/6/5/9c23635b554afd05fb5273.webp',
        'https://dr.savee-cdn.com/things/6/5/9c240c531dee3927eb256d.webp',
        'https://dr.savee-cdn.com/things/6/5/9c9821a1ef2bab5ad4e2bf.webp',
        'https://dr.savee-cdn.com/things/6/0/9dc4a1ab05ece5b554574a.webp',
        'https://dr.savee-cdn.com/things/6/4/c3edf6482c277e41c048a4.webp',
        'https://dr.savee-cdn.com/things/5/e/8e20868ee0b2334d2253be.webp',
        'https://dr.savee-cdn.com/things/6/4/e8ef4f95fa736d8a104d28.webp',
        'https://dr.savee-cdn.com/things/6/5/8bf91c60d4d9811768c975.webp',
        'https://dr.savee-cdn.com/things/6/4/e629fd96a5e53a15256267.webp',
        'https://dr.savee-cdn.com/things/6/5/8ea5ce0a99193bc53f68ee.webp',
        'https://dr.savee-cdn.com/things/5/f/fc40b82a8ac231b6e90c04.webp',
        'https://dr.savee-cdn.com/things/5/e/8e20868ee0b2334d2253be.webp',
        'https://dr.savee-cdn.com/things/6/4/e8ef4f95fa736d8a104d28.webp',
        'https://dr.savee-cdn.com/things/6/5/8bf91c60d4d9811768c975.webp',
        'https://dr.savee-cdn.com/things/6/4/e629fd96a5e53a15256267.webp',
        'https://dr.savee-cdn.com/things/6/4/e8ef4f95fa736d8a104d28.webp',
        'https://dr.savee-cdn.com/things/6/5/8bf91c60d4d9811768c975.webp',
        'https://dr.savee-cdn.com/things/6/4/e629fd96a5e53a15256267.webp',
        'https://dr.savee-cdn.com/things/6/5/8ea5ce0a99193bc53f68ee.webp',
        'https://dr.savee-cdn.com/things/5/f/fc40b82a8ac231b6e90c04.webp',
    ];

    let row_image = [
        "https://res.cloudinary.com/dyvyh4tco/image/upload/c_scale,h_720,q_100/v1672803331/personal-website/9CB3765A-7F84-4B2A-98F4-5AE3D646086E_1_201_a_zt2bzn.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/c_scale,h_1600,q_100/v1672803329/personal-website/8D67568B-24DD-4EB8-BE7E-FAB905D328E1_1_201_a_vbykox.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/c_scale,h_720,q_100/v1672803328/personal-website/0F6CE455-B416-43E1-9A6D-708D01B8A4C6_1_201_a_zvywbw.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/c_scale,h_720,q_100/v1672803328/personal-website/F401B9C2-27E9-4262-B02F-35BA3FD6CE8A_1_201_a_pu5mii.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/c_scale,h_800,q_100/v1672803327/personal-website/1ABDC286-9726-4BA5-B7AB-F64457CB1915_1_201_a_j8y3st.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/c_scale,h_1200,q_100/v1672803326/personal-website/74F19B19-C4C7-4EFC-AEF9-52D3A1D62231_1_201_a_y8cj8m.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803326/personal-website/716F9D01-13EA-44C0-BA82-5DB23E51DFDE_1_105_c_e5k1vg.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803324/personal-website/66361C8C-AAD4-489E-A48D-5C31F0E4E599_1_105_c_a3rc7r.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803324/personal-website/1E5E4B4A-AD34-4FAC-AA5B-F7C0ECD1F1D4_1_105_c_keljvb.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803324/personal-website/2C1431FE-F5D1-4472-A5BC-36FD870EAFCD_1_105_c_fwvjbu.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803324/personal-website/87EFCCBE-D60D-4108-BCAD-D1E358F34FC0_1_105_c_oque4a.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803324/personal-website/B087CAF7-9929-4291-9F5B-2345349D3ECF_1_105_c_cirscz.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803324/personal-website/E7FE98C5-5888-456F-A1DE-C45CF21AB8C9_1_105_c_skjhix.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803324/personal-website/9B431657-7BE8-46C2-99C8-9A6992F5419B_1_105_c_w9febh.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803324/personal-website/6AF7302B-AB6E-4C77-9D79-615DADC7114D_1_105_c_xvrcsm.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803324/personal-website/F01249B2-AC28-4644-A24E-4E8AACBA730E_1_105_c_paylsb.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803323/personal-website/EDEB2387-18D7-406F-831B-63CE5F303145_1_105_c_efivvu.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803323/personal-website/0E221597-72D7-470E-A04A-AEF610D5E0BB_1_105_c_wip89s.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803323/personal-website/93D20289-6346-4D59-83A5-BD6D75B57307_1_105_c_njslwy.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803323/personal-website/F5E71C1B-E9F3-41BC-B150-09BBCC76797C_1_105_c_tdmdnw.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803323/personal-website/913A8FF1-66D3-454F-9046-575DDADBB726_1_105_c_j1out3.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803323/personal-website/218C0A1B-5046-4695-BE4F-2CBC0C69D6D8_1_105_c_rykbpl.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803322/personal-website/77BD3F3B-1F5E-4009-A0B9-920057A54F02_1_105_c_d1zmwv.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1672803291/personal-website/4525DEC7-0940-4765-83E0-D1C2E6378FE5_1_105_c_nf865a.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1673828070/personal-website/Lift_zianil.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1673828071/personal-website/Melbourne_palaf5.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1673828069/personal-website/Bali_mv4xim.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1673828068/personal-website/Fans_cznwij.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/c_scale,h_900,q_auto/v1673828068/personal-website/Frenchy_tem5hl.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1673828067/personal-website/Google_Office-2_uxmiky.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1673828068/personal-website/Google_Office-3_k726g4.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1673828068/personal-website/Google_Office-5_mme1ue.jpg",
        "https://res.cloudinary.com/dyvyh4tco/image/upload/v1673828070/personal-website/Google_Office-6_vh90vd.jpg",
    ]

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