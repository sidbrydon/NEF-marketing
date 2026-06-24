// Presentation State
let currentSlide = 1;
const totalSlides = 12;
let notesVisible = false;
let revealStep = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateSlide();
    initRevealSteps();
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeydown);
    
    // Touch support
    let touchStartX = 0;
    document.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
    document.addEventListener('touchend', e => {
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? prevSlide() : nextSlide();
        }
    });
});

function initRevealSteps() {
    for (let i = 1; i <= totalSlides; i++) {
        const slide = document.querySelector(`[data-slide="${i}"]`);
        const revealElements = slide.querySelectorAll('[data-reveal]');
        revealStep[i] = { current: 0, total: revealElements.length };
    }
}

function handleKeydown(e) {
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
            e.preventDefault();
            advanceOrNext();
            break;
        case 'ArrowLeft':
        case 'Backspace':
            e.preventDefault();
            prevSlide();
            break;
        case 'n':
        case 'N':
            toggleNotes();
            break;
        case 'Escape':
            if (notesVisible) toggleNotes();
            break;
    }
}

function advanceOrNext() {
    const slideState = revealStep[currentSlide];
    if (slideState.current < slideState.total) {
        // Reveal next element
        slideState.current++;
        const slide = document.querySelector(`[data-slide="${currentSlide}"]`);
        const el = slide.querySelector(`[data-reveal="${slideState.current}"]`);
        if (el) {
            el.classList.add('revealed');
            // Animate counter if present
            if (el.querySelector('.counter')) {
                animateCounter(el.querySelector('.counter'));
            }
        }
    } else {
        // Move to next slide
        nextSlide();
    }
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        const currentEl = document.querySelector(`[data-slide="${currentSlide}"]`);
        currentEl.classList.remove('active');
        currentEl.classList.add('exit-left');
        
        currentSlide++;
        updateSlide();
        
        setTimeout(() => {
            currentEl.classList.remove('exit-left');
        }, 600);
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        const currentEl = document.querySelector(`[data-slide="${currentSlide}"]`);
        currentEl.classList.remove('active');
        
        // Reset reveal state for current slide
        resetSlideReveals(currentSlide);
        
        currentSlide--;
        updateSlide();
    }
}

function updateSlide() {
    // Update active slide
    const activeSlide = document.querySelector(`[data-slide="${currentSlide}"]`);
    activeSlide.classList.add('active');
    
    // Update counter
    document.getElementById('slideCounter').textContent = `${currentSlide} / ${totalSlides}`;
    
    // Update progress bar
    const progress = ((currentSlide - 1) / (totalSlides - 1)) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    
    // Update notes
    updateNotes();
    
    // Auto-reveal first elements after a brief delay
    setTimeout(() => {
        if (revealStep[currentSlide].current === 0 && revealStep[currentSlide].total > 0) {
            // Don't auto-reveal - let user click through
        }
    }, 300);
}

function resetSlideReveals(slideNum) {
    const slide = document.querySelector(`[data-slide="${slideNum}"]`);
    const elements = slide.querySelectorAll('[data-reveal]');
    elements.forEach(el => el.classList.remove('revealed'));
    revealStep[slideNum].current = 0;
}

function toggleNotes() {
    notesVisible = !notesVisible;
    document.getElementById('notesToggle').classList.toggle('active', notesVisible);
    updateNotes();
}

function updateNotes() {
    // Hide all notes
    document.querySelectorAll('.speaker-notes').forEach(n => n.classList.remove('visible'));
    
    if (notesVisible) {
        const activeSlide = document.querySelector(`[data-slide="${currentSlide}"]`);
        const notes = activeSlide.querySelector('.speaker-notes');
        if (notes) notes.classList.add('visible');
    }
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 1500;
    const start = performance.now();
    
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

// Presenter timer
let presenterStart = null;
function startTimer() {
    presenterStart = Date.now();
    updateTimer();
}

function updateTimer() {
    if (!presenterStart) return;
    const elapsed = Math.floor((Date.now() - presenterStart) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    // Could display somewhere if needed
    requestAnimationFrame(updateTimer);
}
