window.addEventListener('DOMContentLoaded', () => {

    const zoomedImage = document.getElementById('zoomedImage');
    const clickZoom = document.getElementById('clickZoom');

        clickZoom.addEventListener('click', () => {
            zoomedImage.hidden = !zoomedImage.hidden;
        });

        zoomedImage.addEventListener('click', () => {
            zoomedImage.hidden = !zoomedImage.hidden;
        });


});