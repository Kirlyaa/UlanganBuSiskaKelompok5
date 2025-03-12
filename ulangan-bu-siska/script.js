document.addEventListener("DOMContentLoaded", function () {
    function loadSection(id, file) {
        fetch(file) // Menambahkan mode CORS
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => document.getElementById(id).innerHTML = data)
            .catch(error => console.error(`Error loading ${file}:`, error));
    }

    loadSection("hero-section", "./src/hero-section.html");
    loadSection("mission-section", "./src/mission-section.html");
    loadSection("service-section", "./src/service-section.html");
    loadSection("about-section", "./src/about-section.html");
    loadSection("news-section", "./src/news-section.html");
    loadSection("more-section", "./src/more-section.html");
    loadSection("growth-section", "./src/growth-section.html");


});
