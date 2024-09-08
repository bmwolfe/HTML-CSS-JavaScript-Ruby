import {posts} from '../data/devPosts.js'

let postHTML = "";

posts.forEach((post)=>{
    if(post.Video == ""){
        postHTML += `
        <li class="listedPost">
            <div>
                <h2>${post.Project}</h2>
                <p class="postTitle">${post.Title}</p>
                <p class="devPostUpdate">${post.Update}</p>
                <img src="${post.Image}">
            </div>
        </li>
        `
    } else {
        postHTML += `
        <li class="listedPost">
            <div>
                <h2>${post.Project}</h2>
                <p class="postTitle">${post.Title}</p>
                <p class="devPostUpdate">${post.Update}</p>
                <div class="video-container">
                    <video width="600" controls poster="${post.Image}">
                        <source src="${post.Video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </li>
        `
    }
    
});

console.log(postHTML);

document.querySelector('.js-postList').innerHTML = postHTML;