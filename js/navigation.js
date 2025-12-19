// navigation.js - Navigation Menu Handling

// Add active class to current page in navigation
function setActiveNavLink() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.split('/').pop()) {
            link.classList.add('active');
        }
    });
}

// Mobile navigation toggle
function initMobileNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (menuToggle && navMenu) {
        const toggleMenu = () => {
            const isOpen = document.body.classList.toggle('nav-open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        };

        menuToggle.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                document.body.classList.remove('nav-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Initialize navigation
function initNavigation() {
    setActiveNavLink();
    initMobileNavigation();

    // Ensure clicking "Home" will show popup immediately on the Home page
    // or set a flag so the popup shows immediately after navigation.
    const homeLinks = document.querySelectorAll('a[href="index.html"], a[href="/"], a[href="./index.html"]');
    homeLinks.forEach(link => {
        link.addEventListener('click', () => {
            // When navigating to Home, make popup appear immediately on load
            sessionStorage.setItem('showPopupImmediately', 'true');

            // If we're already on Home and popup element exists, show it now
            const popup = document.getElementById('customerPopup');
            if (popup) {
                popup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });
}



