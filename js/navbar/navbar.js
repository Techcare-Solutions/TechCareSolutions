function loadNavbar() {
    let navbar = document.getElementById('navbar');
    let activeId = navbar.innerHTML;

    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            navbar.innerHTML = data;
        })
    let active = document.getElementById(activeId);
    active.classList.add('active');
}

loadNavbar();