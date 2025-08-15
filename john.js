const toggle = document.getElementById('toggle');
const navLink = document.getElementById('links');

toggle.addEventListener('click', () => {
    navLink.classList.toggle('active');

  // Toggle button icon
    if (links.classList.contains('active')) {
    toggle.textContent = '✖'; // X icon
    } else {
    toggle.textContent = '☰'; // Hamburger
    }
})

var modal = document.getElementById("id01");
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
