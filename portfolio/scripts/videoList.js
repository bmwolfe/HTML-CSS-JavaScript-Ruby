import {projects, getProjectsTotal} from '../data/projects.js';

let totalProjects = getProjectsTotal(projects);
let projectVal = totalProjects;
let projectHTML = '';

// TODO: add an indicator that the project is in progress or completed

if(totalProjects == 1){
    projects.forEach((project)=>{
        projectHTML += `
                <li class="">
                    <div class="projectContainerOdd">
                        <p>${project.name}</p>
                        <p>${project.description}</p>
                        <div class="video-container">
                            <video id="myVideo${totalProjects - projectVal}" width="600" controls poster="${project.thumbnail}">
                                <source src="${project.video}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </li>
                `
                projectVal -= 1;
    });
} else {
    projects.forEach((project)=>{
        if (projectVal > 0){
            if(projectVal % 2 == 0){
                projectHTML += `
                <li class="">
                    <div class="projectContainerEven">
                        <p>${project.name}</p>
                        <p>${project.description}</p>
                        <div class="video-container">
                            <video id="myVideo${totalProjects - projectVal}" width="600" controls poster="${project.thumbnail}">
                                <source src="${project.video}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p></p>
                    </div>
                </li>
                `
                projectVal -= 1;
            } else {
                projectHTML += `
                <li class="">
                    <div class="projectContainerOdd">
                        <p>${project.name}</p>
                        <p>${project.description}</p>
                        <div class="video-container">
                            <video id="myVideo${totalProjects - projectVal}" width="600" controls poster="${project.thumbnail}">
                                <source src="${project.video}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </li>  
                `
                projectVal -= 1;
            } 
        }
    });
}

document.querySelector('.js-projectsList').innerHTML = projectHTML;

const video = document.getElementById('myVideo');
video.addEventListener('click', function() {
    if (video.paused) {
        video.play(); // Play the video if it's paused
    } else {
        video.pause(); // Pause the video if it's playing
    }
});



