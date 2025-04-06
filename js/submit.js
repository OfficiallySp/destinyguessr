document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[name="locationSubmission"]');
    const resultElement = document.querySelector('.submission-result');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Show a loading message
            resultElement.textContent = 'Submitting your screenshot...';
            resultElement.style.color = 'var(--primary-color)';

            // Netlify handles the form submission natively
            // This just enhances the UX with some feedback
            const formData = new FormData(form);

            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                // Success message
                resultElement.textContent = 'Thanks for your submission! We will review it soon.';
                resultElement.style.color = 'var(--success-color)';
                form.reset();
            })
            .catch((error) => {
                // Error message
                console.error('Error:', error);
                resultElement.textContent = 'Something went wrong. Please try again later.';
                resultElement.style.color = 'var(--error-color)';
            });
        });
    }
});
