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

document.addEventListener('DOMContentLoaded', function() {
    const faqTitle = document.querySelector('.faqTitle');
    const faqContent = document.getElementById('faqSectionActivated');
    
    if (faqTitle && faqContent) {
        faqTitle.addEventListener('click', function() {
            if (faqContent.classList.contains('hidden')) {
                faqContent.classList.remove('hidden');
                faqContent.classList.add('visible');
            } else {
                faqContent.classList.add('hidden');
                faqContent.classList.remove('visible');
            }
        });
        
        faqTitle.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        faqTitle.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }

    const cvLink = document.querySelector('.footerIcon[title="CV Download"]');
    console.log('CV Link found:', cvLink); 
    if (cvLink) {
        cvLink.addEventListener('click', function(e) {
            e.preventDefault(); 
            e.stopPropagation(); 
            console.log('CV Link clicked - showing modal'); 
            showCVModal();
        });
    } else {
        console.log('CV Link not found!'); 
    }
});

function showCVModal() {
    console.log('showCVModal called');
    
    let modal = document.getElementById('cvModal');
    if (!modal) {
        modal = createCVModal();
        document.body.appendChild(modal);
    }
    
    modal.style.display = 'flex';
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
    window.open('https://newtocoding26.github.io/ApplicationDocuments/CV.pdf', '_blank');
    closeCVModal();
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'https://newtocoding26.github.io/ApplicationDocuments/CV.pdf';
    link.download = 'CV_Liridon_Drenica.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeCVModal();
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCVModal();
    }
});