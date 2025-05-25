const jjbaScreenshot = document.querySelector('.screenShot');
if(jjbaScreenshot) {
    jjbaScreenshot.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    jjbaScreenshot.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

const pictureOfMe = document.querySelector('.pictureOfMe');
if(pictureOfMe) {
    pictureOfMe.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    pictureOfMe.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}