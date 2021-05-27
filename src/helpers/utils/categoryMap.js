export default function mapProjectsToLanguage(projects) {
    let catObject = {
        "svelte": [],
        "javascript": [],
        "html": [],
        "css": []
    }
    projects.forEach(project => {
        if (project.primaryLanguage.name == "Svelte") {
            catObject.svelte.push(project)
        } else if (project.primaryLanguage.name == "HTML") {
            catObject.html.push(project)
        } else if (project.primaryLanguage.name == "CSS") {
            catObject.css.push(project)
        } else if (project.primaryLanguage.name == "EJS"){
            project.primaryLanguage.name = "HTML"
            project.primaryLanguage.color = "#E34C26"
            catObject.html.push(project)
        } else {
            catObject.javascript.push(project)
        }
    })
    return catObject
}