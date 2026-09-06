fetch('events.json')
  .then(response => response.json())
  .then(data => {
    const repoList = document.getElementById('repo-list');
    data.forEach(repo => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h3><a href="${repo.url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description}</p>
        <p><strong>Language:</strong> ${repo.language}</p>
      `;
      repoList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching the repositories:', error));