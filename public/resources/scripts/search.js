function searchText() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        // Remove previous highlights
        paragraph.innerHTML = paragraph.textContent;

        if (input) {
            const regex = new RegExp(input, 'gi');
            paragraph.innerHTML = paragraph.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
        }
    });
}