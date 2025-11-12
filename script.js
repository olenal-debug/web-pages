// Card interaction logic
const cards = document.querySelectorAll('.report-card');
let activeCard = null;

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking inside form elements
        if (e.target.closest('.expanded-form')) {
            return;
        }

        const cardId = card.dataset.card;

        // If clicking the same card, close it
        if (activeCard === card) {
            closeCard(card);
            return;
        }

        // Close previous card if exists
        if (activeCard) {
            closeCard(activeCard);
        }

        // Open clicked card
        openCard(card);
    });
});

function openCard(card) {
    // Remove active state from all cards
    cards.forEach(c => {
        c.classList.remove('active');
        c.classList.add('dimmed');
    });

    // Set clicked card as active
    card.classList.add('active');
    card.classList.remove('dimmed');
    activeCard = card;

    // Scroll to card smoothly
    setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function closeCard(card) {
    card.classList.remove('active');
    cards.forEach(c => c.classList.remove('dimmed'));
    activeCard = null;
}

// Checkbox functionality
const checkboxes = document.querySelectorAll('.form-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const cardId = checkbox.closest('.report-card').dataset.card;
        const isChecked = e.target.checked;
        console.log(`${cardId} - Visual summary: ${isChecked}`);
    });
});

// Generate report function
function generateReport(cardId) {
    const card = document.querySelector(`[data-card="${cardId}"]`);
    const textarea = card.querySelector('.form-textarea');
    const checkbox = card.querySelector('.form-checkbox');
    const input = textarea.value.trim();
    const includeVisual = checkbox.checked;

    if (!input) {
        alert('Please enter a query or data before generating the report.');
        return;
    }

    console.log('Generating report:', {
        type: cardId,
        input: input,
        includeVisualSummary: includeVisual
    });

    // Simulate report generation
    const button = card.querySelector('.form-button');
    const originalText = button.textContent;
    button.textContent = 'Generating...';
    button.disabled = true;

    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        alert(`Report "${cardId}" generated successfully!`);
    }, 2000);
}

// Close card when clicking outside (optional enhancement)
document.addEventListener('click', (e) => {
    if (activeCard && !activeCard.contains(e.target) && !e.target.closest('header')) {
        closeCard(activeCard);
    }
});

// Keyboard navigation (Escape to close)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeCard) {
        closeCard(activeCard);
    }
});

