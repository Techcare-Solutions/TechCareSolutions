const footer = document.getElementsByTagName("footer")[0]
fetch('/html/templates/footer.html')
    .then(response => response.text())
    .then(data => {
        data = data.replace("CURRENT_YEAR", new Date(Date.now()).getFullYear().toString());
        footer.innerHTML = data;
    }).catch(e => console.error(e));