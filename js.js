

function openModal(imageId, text) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");

    modalImage.src = document.getElementById(imageId).src;
    modalText.textContent = text;

   
    modal.style.display = "block";
}


    function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
        }

    
    function openModal(imageSrc, description) {
            const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalText = document.getElementById('modalText');

    modal.style.display = 'flex';
    modalImage.src = imageSrc;
    modalText.textContent = description;
        }

    function closeModal() {
            const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
        }

window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    const menuIcon = document.querySelector('.menu-icon i');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
}
