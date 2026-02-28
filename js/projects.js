function openProject(repo, topic){
window.location.href =
`project-view.html?repo=${repo}&topic=${encodeURIComponent(topic)}`;
}