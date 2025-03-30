document.addEventListener("DOMContentLoaded", function () {
    // ================================
    // Slideshow Otomatis
    // ================================
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 4000); // Ganti slide setiap 4 detik

    // ================================
    // Sidebar Menu
    // ================================
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const closeMenu = document.querySelector(".close-menu");

    if (menuToggle && sidebar && closeMenu) {
        menuToggle.addEventListener("click", function () {
            sidebar.classList.add("open");
        });

        closeMenu.addEventListener("click", function () {
            sidebar.classList.remove("open");
        });
    }

    // ================================
    // Efek Smooth Scroll (jika ada link dalam menu)
    // ================================
    const menuLinks = document.querySelectorAll(".sidebar ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Sesuaikan dengan tinggi header
                    behavior: "smooth"
                });

                // Tutup sidebar setelah memilih menu
                sidebar.classList.remove("open");
            }
        });
    });

    // ================================
    // Efek Hover pada Pengurus
    // ================================
    const pengurusCards = document.querySelectorAll(".pengurus-card");

    pengurusCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
