function switchLanguage(lang) {
    const allContent = document.querySelectorAll('.language-content');
    allContent.forEach(content => {
        content.classList.remove('active');
    });
    
    const selectedContent = document.getElementById(`content-${lang}`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    const allButtons = document.querySelectorAll('.language-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedButton = document.getElementById(`btn-${lang}`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    const mainTitle = document.getElementById('main-title');
    if (mainTitle) {
        if (lang === 'de') {
            mainTitle.textContent = 'Impressum, Haftungsausschluss & Datenschutz';
        } else {
            mainTitle.textContent = 'Legal Notice, Disclaimer & Privacy Policy';
        }
    }
    
    const headerBackLinks = document.querySelectorAll('.header .backLink');
    headerBackLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(`back-${lang}`).classList.add('active');
    
    const footerTexts = document.querySelectorAll('.footer p');
    footerTexts.forEach(text => {
        text.classList.remove('active');
    });
    document.getElementById(`footer-${lang}`).classList.add('active');
    
    const footerBackLinks = document.querySelectorAll('.footer .backLink');
    footerBackLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(`footer-back-${lang}`).classList.add('active');
    
    document.documentElement.setAttribute('lang', lang);
    
    updateLastModifiedDate(lang);
}

function updateLastModifiedDate(lang) {
    const dateElementEn = document.getElementById('last-updated-en');
    const dateElementDe = document.getElementById('last-updated-de');
    
    if (!dateElementEn || !dateElementDe) {
        console.warn('Date elements not found');
        return;
    }
    
    const now = new Date();
    
    const germanDate = now.toLocaleDateString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    const englishDate = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    dateElementEn.textContent = englishDate;
    dateElementDe.textContent = germanDate;
}

document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('en');
    
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
    
    const backLinks = document.querySelectorAll('.backLink');
    backLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
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
    
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-label', 'Language change notification');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    document.body.appendChild(liveRegion);
    
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

function preparePrint() {
    const allContent = document.querySelectorAll('.language-content');
    allContent.forEach(content => {
        content.style.display = 'block';
    });
    
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

window.addEventListener('beforeprint', preparePrint);

window.addEventListener('afterprint', function() {
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    switchLanguage(currentLang);
});

window.addEventListener('error', function(e) {
    console.error('JavaScript error in legal notice page:', e.error);
    const allContent = document.querySelectorAll('.language-content');
    allContent.forEach(content => {
        content.style.display = 'block';
    });
});