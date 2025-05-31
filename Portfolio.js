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
    if (faqTitle && faqContent) {
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
    }

    // CV Modal functionality - FIXED SELECTOR
    const cvLink = document.querySelector('.footerIcon[title="CV Download"]');
    console.log('CV Link found:', cvLink); // Debug log
    
    if (cvLink) {
        cvLink.addEventListener('click', function(e) {
            e.preventDefault(); // Verhindert das direkte Öffnen des Links
            e.stopPropagation(); // Verhindert Event Bubbling
            console.log('CV Link clicked - showing modal'); // Debug log
            showCVModal();
        });
    } else {
        console.log('CV Link not found!'); // Debug log
    }
});

// CV Modal Functions
function showCVModal() {
    console.log('showCVModal called'); // Debug log
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('cvModal');
    if (!modal) {
        modal = createCVModal();
        document.body.appendChild(modal);
    }
    
    modal.style.display = 'flex';
    // Add fade-in animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function createCVModal() {
    const modal = document.createElement('div');
    modal.id = 'cvModal';
    modal.className = 'cv-modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><ion-icon name="document-text"></ion-icon> CV - Liridon Drenica</h3>
                <button class="close-btn" onclick="closeCVModal()">
                    <ion-icon name="close"></ion-icon>
                </button>
            </div>
            <div class="modal-body">
                <p>What do you want to do with my CV?</p>
                <div class="cv-actions">
                    <button class="cv-btn view-btn" onclick="viewCV()">
                        <ion-icon name="eye"></ion-icon>
                        <span>Open now</span>
                    </button>
                    <button class="cv-btn download-btn" onclick="downloadCV()">
                        <ion-icon name="download"></ion-icon>
                        <span>Download</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCVModal();
        }
    });
    
    return modal;
}

function closeCVModal() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

function viewCV() {
    // Korrigierter Link
    window.open('https://newtocoding26.github.io/ApplicationDocuments/CV.pdf', '_blank');
    closeCVModal();
}

function downloadCV() {
    // Für Download verwenden wir auch den korrekten Link
    const link = document.createElement('a');
    link.href = 'https://newtocoding26.github.io/ApplicationDocuments/CV.pdf';
    link.download = 'CV_Liridon_Drenica.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeCVModal();
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCVModal();
    }
});