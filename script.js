function toggleMenu(){
    const menu = Document.querySelector(".menu-links");
    const icon = Document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}