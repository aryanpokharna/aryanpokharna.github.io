document.addEventListener('DOMContentLoaded', function () {
    var circleType = new CircleType(document.getElementById('circle-type'));
    var container = document.getElementById('circle-type-container')

    window.addEventListener('mousemove', function(e) {
        var mouseX = e.clientX,
            mouseY = e.clientY

        requestAnimationFrame(updatePosition);

        var delay = 100;
        function updatePosition() {
            container.style.position = 'absolute';
            container.style.left = mouseX - container.offsetWidth / 2 + 'px';
            container.style.top = mouseY - container.offsetHeight / 2 + 'px';
        }
    });

});