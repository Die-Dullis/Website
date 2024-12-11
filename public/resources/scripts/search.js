document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput'); // The search input field
    const repoList = document.getElementById('repo-list'); // The list of repositories

    searchInput.addEventListener('input', function() {
        const searchValue = this.value.trim().toLowerCase();
        const cards = repoList.querySelectorAll('li .card');

        cards.forEach(card => {
            const repoName = card.querySelector('a').textContent.trim().toLowerCase(); // Get repository name
            const description = card.querySelector('p')?.textContent.trim().toLowerCase() || ''; // Get description if present

            // Match against repo name or description
            if (repoName.includes(searchValue) || description.includes(searchValue)) {
                card.closest('li').style.display = ''; // Show the <li> element
            } else {
                card.closest('li').style.display = 'none'; // Hide the <li> element
            }
        });
    });
});
