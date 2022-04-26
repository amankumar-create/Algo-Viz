
var sb = document.getElementById("sviz");
var pb = document.getElementById("pviz");
pb.addEventListener('click', () => {
    location.href = '/pathfinder';
})
sb.addEventListener('click', () => {
    location.href = '/sortingvisualiser';
})
