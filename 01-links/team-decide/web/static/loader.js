(function () {
    const element = document.querySelector(".recos");
    const url = element.getAttribute("data-fragment");

    window.fetch(url)
        .then(resp => resp.text())
        .then(html => element.innerHTML = html);

})();
