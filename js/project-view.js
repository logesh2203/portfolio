const params = new URLSearchParams(window.location.search);
const repo = params.get("repo");
const topic = params.get("topic");


/* Selected repo info */
fetch(`https://api.github.com/repos/logesh2203/${repo}`)
.then(res => res.json())
.then(data => {

document.getElementById("projectTitle").innerText = data.name;
document.getElementById("projectDesc").innerText = data.description;
document.getElementById("projectGithub").href = data.html_url;

/* Public API project preview image */
document.getElementById("projectImage").src =
`https://opengraph.githubassets.com/1/logesh2203/${repo}`;

});

/* Topic-based API image */
document.getElementById("projectImage").src =
`https://source.unsplash.com/featured/?${topic}`;

/* GitHub description only (no redirect button) */
fetch(`https://api.github.com/repos/logesh2203/${repo}`)
.then(res=>res.json())
.then(data=>{
document.getElementById("projectTitle").innerText = data.name;
document.getElementById("projectDesc").innerText = data.description;
});

/* Latest GitHub projects */
fetch("https://api.github.com/users/logesh2203/repos?sort=updated")
.then(res => res.json())
.then(repos => {

const container = document.getElementById("latestProjects");

repos.slice(0,4).forEach(r => {
container.innerHTML += `
<div class="project-card">
<img src="https://opengraph.githubassets.com/1/logesh2203/${r.name}">
<div class="project-content">
<h3>${r.name}</h3>
<a href="project-view.html?repo=${r.name}" class="project-btn">View</a>
</div>
</div>`;
});

});