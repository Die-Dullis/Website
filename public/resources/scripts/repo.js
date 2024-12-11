document.addEventListener('DOMContentLoaded', function() {
    const ORG_NAME = 'Die-Dullis'; // Replace with your GitHub org name
    const repoList = document.getElementById('repo-list');
    const languageColors = {
        'JavaScript': '#f1e05a',
        'Python': '#3572A5',
        'Java': '#b07219',
        'PHP': '#4F5D95',
        'C++': '#f34b7d',
        'C#': '#178600',
        'TypeScript': '#2b7489',
        'Shell': '#89e051',
        'CSS': '#563d7c',
        'Ruby': '#701516',
        'Go': '#00ADD8',
        'HTML': '#e34c26'
        // Add more languages and their colors as needed
    };

    fetch(`https://api.github.com/orgs/${ORG_NAME}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const li = document.createElement('li');
                li.classList.add('content-box');
                
                const div = document.createElement('div');
                div.classList.add('card')
                li.appendChild(div);
                // Repository name
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.textContent = repo.name;
                link.target = "_blank"; // Open in new tab
                div.appendChild(link);
                link.classList.add('card-content')

                // Description
                const description = document.createElement('p');
                description.textContent = repo.description || 'No description';
                div.appendChild(description);
                description.classList.add('card-content')

                // Primary language with color dot
                if (repo.language) {
                    const lang = document.createElement('p');
                    lang.classList.add('lang');
                    const langDot = document.createElement('span');
                    langDot.classList.add('lang-dot');
                    langDot.style.backgroundColor = languageColors[repo.language] || '#cccccc';
                    lang.textContent = `Language: ${repo.language}`;
                    lang.prepend(langDot);
                    div.appendChild(lang);
                }

                // Last updated
                const updatedAt = new Date(repo.updated_at).toLocaleString();
                const activity = document.createElement('p');
                activity.classList.add('activity');
                activity.classList.add('card-content')
                activity.textContent = `Last updated: ${updatedAt}`;
                div.appendChild(activity);

                // Append to list
                repoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});