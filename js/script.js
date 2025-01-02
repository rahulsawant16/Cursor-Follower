let follower = document.getElementById("follower");

document.addEventListener("mousemove", (event) => {
    let {clientX, clientY} = event;
    follower.style.left = `${clientX + 10}px`;
    follower.style.top = `${clientY}px`;
});