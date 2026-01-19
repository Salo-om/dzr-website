const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target)
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show")
        }
    })
}, {});

const heading = document.getElementById("header");
const feature = [heading, ...document.getElementsByClassName("feature")];
feature.forEach((el) => observer.observe(el));