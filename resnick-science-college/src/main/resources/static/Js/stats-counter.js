// STATS COUNTER ANIMATION
document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");
    let started = false;

    function runCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 120;

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }

    window.addEventListener("scroll", () => {
        const section = document.querySelector(".stats-section");
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (!started && sectionTop < screenHeight - 100) {
            started = true;
            runCounter();
        }
    });

});
