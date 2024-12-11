function search_projects() {

    let input = document.getElementById('searchbar').value.trim().toLowerCase();
    let parentElement = document.getElementById('repo-list');
    let children = parentElement.getElementsByTagName('content-box');

    
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        
        if (child.id && !child.id.toLowerCase().includes(input)) {
            child.style.display = "none"; // Hide non-matching elements
        } else {
            child.style.display = ""; // Show matching elements
        }
    }
}
