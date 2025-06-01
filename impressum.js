// Bilingual Legal Notice JavaScript

// Language switching functionality
function switchLanguage(lang) {
    // Hide all language content
    const allContent = document.querySelectorAll('.language-content');
    allContent.forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected language content
    const selectedContent = document.getElementById(`content-${lang}`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Update button states
    const allButtons = document.querySelectorAll('.language-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedButton = document.getElementById(`btn-${lang}`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    // Update main title
    const mainTitle = document.getElementById('main-title');
    if (mainTitle) {
        if (lang === 'de') {
            mainTitle.textContent = 'Impressum, Haftungsausschluss & Datenschutz';
        } else {
            mainTitle.textContent = 'Legal Notice, Disclaimer & Privacy Policy';
        }
    }
    
    // Update back links in header
    const headerBackLinks = document.querySelectorAll('.header .backLink');
    headerBackLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(`back-${lang}`).classList.add('active');
    
    // Update footer content
    const footerTexts = document.querySelectorAll('.footer p');
    footerTexts.forEach(text => {
        text.classList.remove('active');
    });
    document.getElementById(`footer-${lang}`).classList.add('active');
    
    // Update footer back links
    const footerBackLinks = document.querySelectorAll('.footer .backLink');
    footerBackLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(`footer-back-${lang}`).classList.add('active');
    
    // Update page language attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Update dates
    updateLastModifiedDate(lang);
}

// Update last modified date
function updateLastModifiedDate(lang) {
    const dateElementEn = document.getElementById('last-updated-en');
    const dateElementDe = document.getElementById('last-updated-de');
    
    if (!dateElementEn || !dateElementDe) {
        console.warn('Date elements not found');
        return;
    }
    
    const now = new Date();
    
    // German format: DD.MM.YYYY
    const germanDate = now.toLocaleDateString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    // English format: MM/DD/YYYY
    const englishDate = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    dateElementEn.textContent = englishDate;
    dateElementDe.textContent = germanDate;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language to English
    switchLanguage('en');
    
    // Add keyboard navigation for language buttons
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
    
    // Add smooth scrolling for back links
    const backLinks = document.querySelectorAll('.backLink');
    backLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a subtle animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels to language buttons
    const enButton = document.getElementById('btn-en');
    const deButton = document.getElementById('btn-de');
    
    if (enButton) {
        enButton.setAttribute('aria-label', 'Switch to English version');
        enButton.setAttribute('role', 'button');
    }
    
    if (deButton) {
        deButton.setAttribute('aria-label', 'Zur deutschen Version wechseln');
        deButton.setAttribute('role', 'button');
    }
    
    // Add ARIA live region for language changes
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-label', 'Language change notification');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    document.body.appendChild(liveRegion);
    
    // Announce language changes
    const originalSwitch = switchLanguage;
    window.switchLanguage = function(lang) {
        originalSwitch(lang);
        const message = lang === 'de' ? 'Deutsche Version geladen' : 'English version loaded';
        liveRegion.textContent = message;
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    };
});

// Print functionality
function preparePrint() {
    // Show both languages when printing
    const allContent = document.querySelectorAll('.language-content');
    allContent.forEach(content => {
        content.style.display = 'block';
    });
    
    // Add print-specific styling
    const printStyles = document.createElement('style');
    printStyles.innerHTML = `
        @media print {
            .language-content:not(:first-of-type) {
                page-break-before: always;
            }
            .language-toggle {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(printStyles);
}

// Listen for print events
window.addEventListener('beforeprint', preparePrint);

// Cleanup after print
window.addEventListener('afterprint', function() {
    // Restore original display state
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    switchLanguage(currentLang);
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error in legal notice page:', e.error);
    // Fallback to show both languages if there's an error
    const allContent = document.querySelectorAll('.language-content');
    allContent.forEach(content => {
        content.style.display = 'block';
    });
});