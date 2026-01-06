document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".slider-track");
    const slides = Array.from(track.children);
    const prevBtn = document.querySelector(".slider-btn.prev");
    const nextBtn = document.querySelector(".slider-btn.next");
    const dotsContainer = document.querySelector(".slider-dots");

    let index = 0;
    const total = slides.length;
    const visible = window.innerWidth <= 768 ? 2 : 5;

    // Create dots
    for (let i = 0; i < Math.ceil(total / visible); i++) {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    }

    const dots = Array.from(dotsContainer.children);

    function updateSlider() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * slideWidth}px)`;

        dots.forEach(d => d.classList.remove("active"));
        dots[Math.floor(index / visible)]?.classList.add("active");
    }

    nextBtn.onclick = () => {
        index = (index + visible) % total;
        updateSlider();
    };

    prevBtn.onclick = () => {
        index = (index - visible + total) % total;
        updateSlider();
    };

    // Auto-slide
    setInterval(() => {
        nextBtn.click();
    }, 3000);
});
