//Load made websites from json
    {
        const websitesTable = document.getElementById('websitesTable');
        fetch('/js/portfolio/websites.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(website => {
                    websitesTable.innerHTML += `
                    <tr>
                    <td>${website.name}</td>
                    <td>${website.description}</td>
                    <td><a href="${website.url}" target="_blank" class="badge badge-info">View</a></td>
                    </tr>
                    `
                })
            }).catch(error => console.error('Error: ', error))
        websitesTable.innerHTML = '';
    }


//Load GitHub projects
    {
        const usernames = ['zouffke', 'softtagz-sys', 'Techcare-Solutions'];
        const excludedProjects = ['softtagz-sys', 'zouffke', 'softtagz-sys.github.io'];
        const projectsTable = document.getElementById('projectsTable');
        projectsTable.innerHTML = '';

        let fetchPromises = usernames.map(username => {
            return fetch(`https://api.github.com/users/${username}/repos`)
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                .catch(error => console.error('Error:', error));
        });

        Promise.all(fetchPromises)
            .then(allData => {
                allData = allData.flat();
                allData.sort((a, b) => a.name.localeCompare(b.name));
                allData.forEach(repo => {
                    if (excludedProjects.includes(repo.name)) return;
                    projectsTable.innerHTML += `
                <tr>
                <td>${repo.name}</td>
                <td><i>${repo.owner.login}</i></td>
                <td>${repo.description == null ? "No description" : repo.description}</td>
                <td><a href="${repo.html_url}" target="_blank" class="badge badge-info">View</a></td>
                </tr>
            `;
                });
            });
    }