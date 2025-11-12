// ========================================
// Slides Navigation
// ========================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Initialize
function init() {
    showSlide(0);
    updateProgress();
    updateCounter();
    updateNavButtons();
}

// Show specific slide
function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove('active', 'previous');
    });

    // Add active class to current slide
    slides[index].classList.add('active');

    // Add previous class to slides before current
    for (let i = 0; i < index; i++) {
        slides[i].classList.add('previous');
    }

    currentSlide = index;
    updateProgress();
    updateCounter();
    updateNavButtons();
}

// Next slide
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        showSlide(currentSlide + 1);
    }
}

// Previous slide
function previousSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

// Update progress bar
function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressFill.style.width = progress + '%';
}

// Update slide counter
function updateCounter() {
    const counter = document.getElementById('slide-counter');
    counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
}

// Update navigation buttons
function updateNavButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

// ========================================
// Keyboard Navigation
// ========================================

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowRight':
        case ' ': // Spacebar
        case 'PageDown':
            event.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'PageUp':
            event.preventDefault();
            previousSlide();
            break;
        case 'Home':
            event.preventDefault();
            showSlide(0);
            break;
        case 'End':
            event.preventDefault();
            showSlide(totalSlides - 1);
            break;
    }
});

// ========================================
// Touch/Swipe Support for Mobile
// ========================================

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            previousSlide();
        }
    }
}

// ========================================
// Quiz Answer Reveal
// ========================================

function revealAnswer(button) {
    const slide = button.closest('.slide');
    const correctAnswer = slide.querySelector('.correct-answer');

    if (correctAnswer) {
        correctAnswer.classList.remove('hidden');
        button.style.display = 'none';
    }
}

// ========================================
// Animation Triggers
// ========================================

// Trigger animations when slide becomes active
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fadeElements = entry.target.querySelectorAll('.fade-in');
            fadeElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                }, index * 300);
            });
        }
    });
}, { threshold: 0.5 });

slides.forEach(slide => {
    observer.observe(slide);
});

// ========================================
// Presentation Mode
// ========================================

// Fullscreen toggle (F11 or F)
document.addEventListener('keydown', (event) => {
    if (event.key === 'f' || event.key === 'F') {
        toggleFullscreen();
    }
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Fullscreen request failed:', err);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// ========================================
// Slide Overview (Press 'O')
// ========================================

let overviewMode = false;

document.addEventListener('keydown', (event) => {
    if (event.key === 'o' || event.key === 'O') {
        toggleOverview();
    }
});

function toggleOverview() {
    overviewMode = !overviewMode;
    const slidesContainer = document.querySelector('.slides-container');

    if (overviewMode) {
        slidesContainer.classList.add('overview-mode');
        // Show all slides in grid
        slides.forEach((slide, index) => {
            slide.classList.add('overview-slide');
            slide.onclick = () => {
                toggleOverview();
                showSlide(index);
            };
        });
    } else {
        slidesContainer.classList.remove('overview-mode');
        slides.forEach(slide => {
            slide.classList.remove('overview-slide');
            slide.onclick = null;
        });
    }
}

// ========================================
// Slide Notes (Press 'N')
// ========================================

function showNotes() {
    const currentSlideElement = slides[currentSlide];
    const phase = currentSlideElement.dataset.phase;

    let notes = '';

    switch(phase) {
        case 'intro':
            notes = 'Introduction: Set expectations and create interest in the topic.';
            break;
        case 'phase1':
            notes = 'Phase 1 (8min): Activate prior knowledge. Collect student examples.';
            break;
        case 'phase2':
            notes = 'Phase 2 (10min): Present grammar rule. Show code connection (4 min max).';
            break;
        case 'phase3':
            notes = 'Phase 3 (8min): Partner work. Grammar practice with worksheets.';
            break;
        case 'phase4':
            notes = 'Phase 4 (12min): Individual writing. Create own conditionals.';
            break;
        case 'phase5':
            notes = 'Phase 5 (7min): Reflection, quiz, and homework assignment.';
            break;
        default:
            notes = 'Navigate through slides with arrow keys or buttons.';
    }

    alert('Teacher Notes:\n\n' + notes);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'n' || event.key === 'N') {
        showNotes();
    }
});

// ========================================
// Timer for Phases (Press 'T')
// ========================================

let timerInterval = null;
let timerSeconds = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === 't' || event.key === 'T') {
        toggleTimer();
    }
});

function toggleTimer() {
    if (timerInterval) {
        // Stop timer
        clearInterval(timerInterval);
        timerInterval = null;
        removeTimerDisplay();
    } else {
        // Start timer
        const currentSlideElement = slides[currentSlide];
        const phase = currentSlideElement.dataset.phase;

        // Set timer based on phase
        let duration = 0;
        switch(phase) {
            case 'phase1': duration = 8 * 60; break;
            case 'phase2': duration = 10 * 60; break;
            case 'phase3': duration = 8 * 60; break;
            case 'phase4': duration = 12 * 60; break;
            case 'phase5': duration = 7 * 60; break;
            default: duration = 5 * 60; break;
        }

        startTimer(duration);
    }
}

function startTimer(duration) {
    timerSeconds = duration;
    createTimerDisplay();
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();

        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            playTimerSound();
        }
    }, 1000);
}

function createTimerDisplay() {
    let timerDiv = document.getElementById('timer-display');
    if (!timerDiv) {
        timerDiv = document.createElement('div');
        timerDiv.id = 'timer-display';
        timerDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            font-size: 2rem;
            font-weight: bold;
            z-index: 1000;
        `;
        document.body.appendChild(timerDiv);
    }
}

function updateTimerDisplay() {
    const timerDiv = document.getElementById('timer-display');
    if (timerDiv) {
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        timerDiv.textContent = `⏰ ${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Change color when time is running out
        if (timerSeconds <= 60) {
            timerDiv.style.background = 'rgba(231, 76, 60, 0.9)';
        } else if (timerSeconds <= 180) {
            timerDiv.style.background = 'rgba(243, 156, 18, 0.9)';
        }
    }
}

function removeTimerDisplay() {
    const timerDiv = document.getElementById('timer-display');
    if (timerDiv) {
        timerDiv.remove();
    }
}

function playTimerSound() {
    // Visual alert when timer ends
    const timerDiv = document.getElementById('timer-display');
    if (timerDiv) {
        timerDiv.textContent = '⏰ TIME UP!';
        timerDiv.style.animation = 'pulse 1s infinite';

        setTimeout(() => {
            removeTimerDisplay();
        }, 5000);
    }
}

// ========================================
// Help Menu (Press '?')
// ========================================

document.addEventListener('keydown', (event) => {
    if (event.key === '?' || (event.shiftKey && event.key === '/')) {
        showHelp();
    }
});

function showHelp() {
    const helpText = `
KEYBOARD SHORTCUTS:

Navigation:
→ or Space    Next slide
← or PageUp   Previous slide
Home          First slide
End           Last slide

Features:
F or F11      Toggle fullscreen
N             Show teacher notes
T             Start/stop phase timer
O             Overview mode (all slides)
?             Show this help

Tips:
- Use arrow keys for smooth navigation
- Press T to track time for each phase
- Press N for teaching reminders
- Click on slides in overview mode to jump to them
    `;

    alert(helpText);
}

// ========================================
// Auto-hide keyboard hint after 5 seconds
// ========================================

setTimeout(() => {
    const hint = document.querySelector('.keyboard-hint');
    if (hint) {
        hint.style.transition = 'opacity 1s ease';
        hint.style.opacity = '0';
        setTimeout(() => {
            hint.style.display = 'none';
        }, 1000);
    }
}, 5000);

// ========================================
// Initialize on page load
// ========================================

window.addEventListener('DOMContentLoaded', () => {
    init();

    // Show welcome message with keyboard shortcuts
    setTimeout(() => {
        const showWelcome = confirm(
            'Welcome to the presentation!\n\n' +
            'Press → or Space to navigate forward\n' +
            'Press ← to go back\n' +
            'Press ? for all keyboard shortcuts\n\n' +
            'Click OK to continue, or Cancel to skip this message.'
        );
    }, 500);
});

// ========================================
// Prevent accidental page navigation
// ========================================

window.addEventListener('beforeunload', (event) => {
    // Only show warning if not on first or last slide
    if (currentSlide > 0 && currentSlide < totalSlides - 1) {
        event.preventDefault();
        event.returnValue = '';
    }
});

// ========================================
// Print Styles - Print all slides
// ========================================

window.addEventListener('beforeprint', () => {
    slides.forEach(slide => {
        slide.classList.add('active');
        slide.style.position = 'relative';
        slide.style.pageBreakAfter = 'always';
    });
});

window.addEventListener('afterprint', () => {
    slides.forEach((slide, index) => {
        slide.style.position = '';
        slide.style.pageBreakAfter = '';
        if (index !== currentSlide) {
            slide.classList.remove('active');
        }
    });
});
