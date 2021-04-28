//fetch("/api/projects").then(res => res.json()).then(console.log)


(async function getProjects(){
    try{
        const response = await fetch("/api/projects");
        const result = await response.json();

        const projectsDiv = document.getElementById("result");

        result.projects.map(project => {
            const projectDiv = document.createElement("div");

            const titleHeader = document.createElement("a");
            titleHeader.classList.add("project-title");
            titleHeader.innerText = project.title;
            titleHeader.href = "/api/project/" + project.id;
            


            const descriptionP = document.createElement("p");
            descriptionP.classList.add("description");
            descriptionP.innerText = project.description;


            // when we say appen, then we are putting element inside div
            projectDiv.appendChild(titleHeader);
            projectDiv.appendChild(descriptionP);
            projectsDiv.appendChild(projectDiv);


        })

    }
    catch(errro){
        console.log(error);
    }
   
})();