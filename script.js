//preloader
window.addEventListener('load', () => {
    const preload = document.getElementById("preloader");
    preload.classList.add('preload-finish');
    
});

//Sidepanel
function openNav() {
    document.getElementById("mySidepanel").style.width = "80%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
