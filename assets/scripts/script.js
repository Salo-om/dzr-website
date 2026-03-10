const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
        }
    })
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
});

const elements = document.querySelectorAll(".features__header, .feature");
elements.forEach((el) => observer.observe(el));

const menu = document.getElementById("links__icon");
const links = document.getElementById("links");

menu.addEventListener("click", () => {
    links.classList.toggle("links");
});