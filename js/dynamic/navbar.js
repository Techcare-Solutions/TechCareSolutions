window.onload = function () {
    fetch('/html/templates/navbar.html')
        .then(response => response.text())
        .then(data => {
            data = setActiveClass(data);
            document.getElementById('navbar').innerHTML = data;
        })
}

function setActiveClass(data) {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    switch (page) {
        case 'portfolio.html':
            data = replaceData(data, "portfolioDropdown")
            break;
        case 'about.html':
            data = replaceData(data, "navbarAbout")
            break;
        case 'services.html':
            data = replaceData(data, "navbarServices")
            break;
        case 'contact.html':
            data = replaceData(data, "navbarContact");
            break;
    }

    return data;
}

function replaceData(data, id) {
    const regex = new RegExp(`id="${id}" class="([^"]*)"`);
    const match = data.match(regex);
    if (match && match[1]) {
        const currentClasses = match[1];
        data = data.replace(regex, `id="portfolioDropdown" class="${currentClasses} active"`);
    }

    return data;
}