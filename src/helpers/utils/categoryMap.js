export default function mapProjectsToLanguage(projects) {
    let dataArray = [
        { mainLang: 'Svelte', projects: [] }, 
        { mainLang: 'Javascript', projects: [] },
        { mainLang: 'HTML', projects: [] },
        { mainLang: 'CSS', projects: [] }
        
    ]
    projects.forEach(project => {
        dataArray.forEach(data => {
            if (data.mainLang.toLowerCase() == project.primaryLanguage.name.toLowerCase()) {
                data.projects.push(project)
            }
            if (project.primaryLanguage.name.toLowerCase() == 'ejs' && data.mainLang == 'HTML') {
                data.projects.push(project)
            }
        })
    })
    return dataArray
}