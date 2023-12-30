const usernames = ['zouffke', 'softtagz-sys'];
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