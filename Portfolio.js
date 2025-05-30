const jjbaScreenshot = document.querySelector('.screenShot');
if(jjbaScreenshot) {
    jjbaScreenshot.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.03)';
        this.style.transition = 'transform 0.3s ease';
    });

    jjbaScreenshot.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    jjbaScreenshot.addEventListener('click', function () {
        window.open('https://newtocoding26.github.io/JJBA_Quiz/JJBAQUIZ.html', '_blank')
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

// FAQ Section Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqTitle = document.querySelector('.faqTitle');
    const faqContent = document.getElementById('faqSectionActivated');
    
    // Add click event listener to FAQ title
    faqTitle.addEventListener('click', function() {
        // Toggle the hidden class
        if (faqContent.classList.contains('hidden')) {
            faqContent.classList.remove('hidden');
            faqContent.classList.add('visible');
        } else {
            faqContent.classList.add('hidden');
            faqContent.classList.remove('visible');
        }
    });
    
    // Add hover effect for better UX
    faqTitle.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    faqTitle.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});