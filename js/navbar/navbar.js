window.onload = function () {
    fetch('navbar.html')
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
            const regex = /id="portfolioDropdown" class="([^"]*)"/;
            const match = data.match(regex);
            if (match && match[1]) {
                const currentClasses = match[1];
                data = data.replace(regex, `id="portfolioDropdown" class="${currentClasses} active"`);
            }
            break;
    }

    return data;
}