document.addEventListener('DOMContentLoaded', function() {
    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if(name && email && message) {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Property search form handling
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const location = document.getElementById('location').value;
            const propertyType = document.getElementById('property-type').value;
            const priceRange = document.getElementById('price-range').value;
            
            // Redirect to properties page with filters
            window.location.href = `properties.html?location=${location}&type=${propertyType}&price=${priceRange}`;
        });
    }

    // Filter form handling
    const filterForm = document.querySelector('.filter-form');
    if (filterForm) {
        const applyFilters = () => {
            // Lấy giá trị từ bộ lọc
            const location = document.getElementById('filter-location').value.toLowerCase();
            const type = document.getElementById('filter-type').value.toLowerCase();
            const bedrooms = document.getElementById('filter-bedrooms').value;
            const priceRange = document.getElementById('filter-price').value;

            const properties = document.querySelectorAll('.property-card');

            properties.forEach(card => {
                let isVisible = true;

                // 1. Lọc theo Location (Địa điểm)
                if (location) {
                    const address = card.querySelector('.property-address').textContent.toLowerCase();
                    const locationMap = {
                        'downtown': ['downtown'],
                        'waterfront': ['water', 'river', 'harbor', 'coastal'],
                        'metropolitan city': ['metropolitan city'],
                        'metro city': ['metro city'],
                        'coastal city': ['coastal city'],
                        'waterside': ['waterside']
                    };
                    const keywords = locationMap[location] || [location];
                    if (!keywords.some(k => address.includes(k))) isVisible = false;
                }

                // 2. Lọc theo Type (Loại hình)
                if (isVisible && type) {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    if (!title.includes(type)) isVisible = false;
                }

                // 3. Lọc theo Bedrooms (Số phòng ngủ)
                if (isVisible && bedrooms) {
                    const bedsText = card.querySelector('.fa-bed').nextElementSibling.textContent;
                    const beds = parseInt(bedsText); // Lấy số từ chuỗi "3 Beds"
                    if (bedrooms === '3' ? beds < 3 : beds !== parseInt(bedrooms)) isVisible = false;
                }

                // 4. Lọc theo Price (Mức giá)
                if (isVisible && priceRange) {
                    const price = parseInt(card.querySelector('.property-price').textContent.replace(/[^0-9]/g, ''));
                    const [min, max] = priceRange.split('-').map(v => v.includes('+') ? 2000000 : parseInt(v));
                    if (priceRange.includes('+') ? price < min : (price < min || price > max)) isVisible = false;
                }

                card.style.display = isVisible ? 'block' : 'none';
            });
        };

        filterForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn trang web tải lại
            applyFilters();
        });

        // Tự động lọc nếu có tham số trên URL (từ trang Search)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('location') || urlParams.has('type') || urlParams.has('price')) {
            if (urlParams.has('location')) document.getElementById('filter-location').value = urlParams.get('location');
            if (urlParams.has('type')) document.getElementById('filter-type').value = urlParams.get('type');
            if (urlParams.has('price')) document.getElementById('filter-price').value = urlParams.get('price');
            applyFilters();
        }
    }

    // Newsletter form handling
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });
    });

    // Add active class to current page in navigation
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.split('/').pop()) {
            link.classList.add('active');
        }
    });

    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
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

    // Initialize popup except on specific pages
    const currentPage = currentLocation.split('/').pop().toLowerCase();
    const pagesWithoutPopup = ['about.html', 'agents.html', 'properties.html', 'contact.html', 'blog1.html', 'blog2.html', 'blog3.html'];
    if (!pagesWithoutPopup.includes(currentPage)) {
        initializePopup();
    }

});

// SIMPLE POPUP VERSION
function initializePopup() {
    // Create popup HTML
    const popupHTML = `
        <div class="popup-overlay" id="customerPopup">
            <div class="popup-modal">
                <button class="close-popup" id="closePopup">&times;</button>
                <div class="popup-header">
                    <h2>Get Personalized Advice</h2>
                    <p>Let us help you find your dream property. Share your details and we'll contact you with expert recommendations.</p>
                </div>
                <form class="popup-form" id="popupForm">
                    <div class="form-group">
                        <label for="popupName">Full Name *</label>
                        <input type="text" id="popupName" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="popupEmail">Email Address *</label>
                        <input type="email" id="popupEmail" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="popupPhone">Phone Number *</label>
                        <input type="tel" id="popupPhone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="popupInterest">Property Interest</label>
                        <select id="popupInterest" name="interest">
                            <option value="">Select your interest</option>
                            <option value="buying">Buying</option>
                            <option value="selling">Selling</option>
                            <option value="renting">Renting</option>
                            <option value="investment">Investment</option>
                            <option value="consultation">General Consultation</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="popupBudget">Budget Range</label>
                        <select id="popupBudget" name="budget">
                            <option value="">Select budget range</option>
                            <option value="0-500000">$0 - $500,000</option>
                            <option value="500000-1000000">$500,000 - $1,000,000</option>
                            <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
                            <option value="2000000+">$2,000,000+</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="popupMessage">Additional Requirements</label>
                        <textarea id="popupMessage" name="message" placeholder="Tell us about your specific needs, preferred locations, or any other requirements..."></textarea>
                    </div>
                    <div class="popup-actions">
                        <button type="submit" class="btn">Get Free Consultation</button>
                        <button type="button" class="btn btn-outline" id="laterBtn">Maybe Later</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    // Add popup to body
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    const popup = document.getElementById('customerPopup');
    const closePopup = document.getElementById('closePopup');
    const laterBtn = document.getElementById('laterBtn');
    const popupForm = document.getElementById('popupForm');

    // ALWAYS SHOW ON REFRESH - Simple approach
    const showImmediately = sessionStorage.getItem('showPopupImmediately');
    
    console.log('Popup check - showImmediately:', showImmediately); // Debug log
    
    if (showImmediately === 'true') {
        // Show immediately on refresh
        console.log('Showing popup immediately (refresh detected)');
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        sessionStorage.removeItem('showPopupImmediately'); // Clear for next time
    } else {
        // Show after 3 seconds for first visit
        console.log('Showing popup after delay (first visit)');
        setTimeout(() => {
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }, 3000);
    }

    // Set flag for next refresh
    window.addEventListener('beforeunload', function() {
        console.log('Setting showPopupImmediately for next refresh');
        sessionStorage.setItem('showPopupImmediately', 'true');
    });

    // Close popup functions
    function closePopupModal() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closePopup.addEventListener('click', closePopupModal);
    laterBtn.addEventListener('click', closePopupModal);

    popup.addEventListener('click', function(e) {
        if (e.target === popup) closePopupModal();
    });

    popupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('popupName').value;
        const email = document.getElementById('popupEmail').value;
        const phone = document.getElementById('popupPhone').value;
        
        if (name && email && phone) {
            alert('Thank you! Our expert will contact you within 24 hours with personalized advice.');
            closePopupModal();
            this.reset();
        } else {
            alert('Please fill in all required fields (Name, Email, Phone).');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.style.display === 'flex') {
            closePopupModal();
        }
    });
}

// TEST FUNCTION: Force show popup (add this to browser console to test)
function showPopupNow() {
    const popup = document.getElementById('customerPopup');
    if (popup) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        console.log('Popup shown manually');
    } else {
        console.log('Popup element not found');
    }
}

// TEST FUNCTION: Reset all popup settings (add this to browser console to test)
function resetPopupSettings() {
    localStorage.removeItem('popupFormSubmitted');
    localStorage.removeItem('popupLastCloseTime');
    sessionStorage.removeItem('showPopupImmediately');
    console.log('Popup settings reset. Refresh the page to see popup again.');
}
