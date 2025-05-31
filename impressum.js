// impressum.js - JavaScript für automatisches Datum

document.addEventListener('DOMContentLoaded', function() {
    // Aktuelles Datum im deutschen Format erstellen
    const now = new Date();
    const germanDate = now.toLocaleDateString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    // Datum in das HTML-Element einfügen
    const dateElement = document.getElementById('last-updated');
    if (dateElement) {
        dateElement.textContent = germanDate;
    }
    
    // Optional: Fallback falls Element nicht gefunden wird
    if (!dateElement) {
        console.warn('Element mit ID "last-updated" wurde nicht gefunden');
    }
});