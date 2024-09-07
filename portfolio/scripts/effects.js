// script.js
const trailLength = 10; // Number of elements in the trail
const trail = [];

// Create trail elements and append them to the body
for (let i = 0; i < trailLength; i++) {
  const follower = document.createElement('div');
  follower.classList.add('follower');
  document.body.appendChild(follower);
  trail.push(follower);
}

let mouseX = 0, mouseY = 0;

// Track mouse movement
document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// Update the position of each follower in the trail
function animateTrail() {
  let previousX = mouseX, previousY = mouseY;
  
  trail.forEach((follower, index) => {
    // Gradually move each follower to the previous follower's position
    const currentX = follower.offsetLeft + (previousX - follower.offsetLeft) * 0.3;
    const currentY = follower.offsetTop + (previousY - follower.offsetTop) * 0.3;

    follower.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`; // Center the follower
    follower.style.opacity = (1 - index / trailLength).toString(); // Make trailing elements fade out

    previousX = currentX;
    previousY = currentY;
  });

  requestAnimationFrame(animateTrail);
}

animateTrail();