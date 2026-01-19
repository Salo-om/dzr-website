const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show")
        }
    })
}, {});

const heading = document.getElementsByClassName("features__header");
const feature = document.getElementsByClassName("feature");
const elements = [...heading,...feature];
elements.forEach((el) => observer.observe(el));