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


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchInput').addEventListener('input', function () {
        const searchValue = this.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.Blog .post');

        cards.forEach(card => {
            const projectName = card.querySelector('#title').textContent.trim().toLowerCase();
            if (projectName.includes(searchValue)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
