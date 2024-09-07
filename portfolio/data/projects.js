export function getProjectsTotal(projects){
    let total = 0;
    projects.forEach((project)=>{
        total += 1;
    });
    return total;
}

export const projects = [
    {
        name: "Finite Automata Minecraft Mod",
        description: "This project the was 2nd place winner for the Grizzhacks6 Hackathon in 2024",
        thumbnail: "images/Algonac.jpg",
        video: "",
        inprogress: false
     }, 
     {
         name: "Youtube Clone",
         description: "Here I worked on my HTML and CSS skills.",
         thumbnail: "images/Algonac.jpg",
         video: "",
         inprogress: true
     },
     {
         name: "Universal Password Website",
         description: "The is an HTML and JavaScript project meant to be used with other websites",
         image: "",
         video: "",
         inprogress: true
     }, 
     {
         name: "Arcade Games (Group)",
         description: "This project was a group Java project where I worked with Java and JavaFX",
         image: "",
         video: "",
         inprogress: false
     }//,
    // {
    //     name: "Amazon Clone",
    //     description: "hello",
    //     image: "",
    //     video: "",
    //     inprogress: true
    // },
    // {
    //     name: "2D Adventure Game",
    //     description: "hello",
    //     image: "",
    //     video: "",
    //     inprogress: true
    // }

];