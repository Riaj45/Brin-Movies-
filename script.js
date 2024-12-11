document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const galleryItems = document.querySelectorAll('.item');

    // Create and add a message for no results
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = "Sorry, No Results Found.";
    noResultsMessage.style.textAlign = "center";
    noResultsMessage.style.display = "none"; // Initially hidden
    noResultsMessage.style.color = "#fff";
    document.querySelector('.gallery').appendChild(noResultsMessage);

    // Filter gallery items based on search
    searchBar.addEventListener('input', () => {
        const searchText = searchBar.value.toLowerCase();
        let hasResults = false;

        galleryItems.forEach(item => {
            const title = item.getAttribute('data-title').toLowerCase();
            if (title.includes(searchText)) {
                item.style.display = 'block';
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        });

        // Show or hide the no results message
        noResultsMessage.style.display = hasResults ? "none" : "block";
    });

    // Add click event to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const imageSrc = item.querySelector('img').src;
            window.location.href = `details.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(imageSrc)}`;
        });
    });
});