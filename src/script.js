const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');

    // Toggle icons
    if (nav.classList.contains('hidden')) {
        btn.innerHTML = "<i class='bx bx-menu bx-md transition-transform duration-300'></i>"; // Change to X icon
    } else {
        btn.innerHTML = "<i class='bx bx-x bx-md transition-transform duration-300'></i>"; // Change to Menu icon
    }
});