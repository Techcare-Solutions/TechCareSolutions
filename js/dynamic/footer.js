 const footer = document.getElementsByTagName("footer")[0]
    fetch('/html/templates/footer.html')
        .then(response => response.text())
        .then(data => footer.innerHTML = data);