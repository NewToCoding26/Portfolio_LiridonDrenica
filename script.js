// Portfolio JavaScript - Liridon Drenica
// Hier kannst du später JavaScript-Funktionalitäten hinzufügen

// Beispiel: Console-Ausgabe beim Laden der Seite
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio von Liridon Drenica erfolgreich geladen!');
    console.log('Code.Fail.Repeat.Success.');
});

// Beispiel: Smooth scrolling für spätere Navigation
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Beispiel: Bild-Hover-Effekt (optional für später)
const profileImage = document.querySelector('.pictureOfMe');
if (profileImage) {
    profileImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    profileImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}