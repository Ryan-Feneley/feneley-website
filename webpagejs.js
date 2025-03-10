//addition 1: date/time
function updateDateTime() {
    let now = new Date();
    let formattedDate = now.toLocaleDateString();
    let formattedTime = now.toLocaleTimeString();
    
    document.getElementById("currentDateTime").textContent = `${formattedDate} - ${formattedTime}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);


//addition 2: scrolling to section button
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}



//Addition 3: scroll to top button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { 
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
