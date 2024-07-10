function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}


function refreshPage() {
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.reload();
        });
    });
}