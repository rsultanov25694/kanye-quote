const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function to fetch a random quote from the Kanye West Quotes API
async function fetchQuote() {
    try {
        newQuoteBtn.disabled = true;
        newQuoteBtn.textContent = 'Loading...';
        
        const response = await fetch('https://api.kanye.rest/');
        
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        
        const data = await response.json();
        
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = 'Kanye West';
        
    } catch (error) {
        quoteText.textContent = 'Sorry, failed to load quote. Please try again.';
        quoteAuthor.textContent = '';
        console.error('Error fetching quote:', error);
    } finally {
        newQuoteBtn.disabled = false;
        newQuoteBtn.textContent = 'Get New Quote';
    }
}

// Event listener for the button
newQuoteBtn.addEventListener('click', fetchQuote);

// Load a quote when the page loads
fetchQuote();

