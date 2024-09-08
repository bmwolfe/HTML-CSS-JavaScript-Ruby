const follower = document.querySelector('.mouse-follower');

  document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // Update the position of the follower
    follower.style.left = `${mouseX}px`;
    follower.style.top = `${mouseY}px`;
  });