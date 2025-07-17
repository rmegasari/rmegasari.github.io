// Fungsi untuk menu mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}


// Fungsi untuk Animasi On-Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 // Tampilkan saat 10% elemen terlihat
});

// Ambil semua elemen dengan class 'animated-section' dan amati
const animatedSections = document.querySelectorAll('.animated-section');
animatedSections.forEach(section => {
    observer.observe(section);
});
