// forms.js - Form Handling

// Contact form validation
function initContactForm() {
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
}

// Property search form handling
function initSearchForm() {
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
}
// Filter form handling
function initFilterForm() {
    const filterForm = document.querySelector('.filter-form');
    if (filterForm) {
        const applyFilters = () => {
            // Lấy giá trị từ bộ lọc
            const location = document.getElementById('filter-location').value.toLowerCase();
            const type = document.getElementById('filter-type').value.toLowerCase();
            const bedrooms = document.getElementById('filter-bedrooms').value;
            const priceRange = document.getElementById('filter-price').value;

            const properties = document.querySelectorAll('.property-card');
            let visibleCount = 0;

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
                if (isVisible) visibleCount++;
                card.style.display = isVisible ? 'block' : 'none';
            });
            // Hiển thị thông báo nếu không tìm thấy kết quả
            const grid = document.querySelector('.properties-grid');
            let noResultsMsg = document.getElementById('no-results-msg');

            if (visibleCount === 0) {
                if (!noResultsMsg) {
                    noResultsMsg = document.createElement('div');
                    noResultsMsg.id = 'no-results-msg';
                    noResultsMsg.textContent = 'No Properties match filter';
                    noResultsMsg.style.cssText = 'text-align: center; width: 100%; padding: 2rem; grid-column: 1 / -1; font-size: 1.2rem; color: #666;';
                    grid.appendChild(noResultsMsg);
                }
                noResultsMsg.style.display = 'block';
            } else if (noResultsMsg) {
                noResultsMsg.style.display = 'none';
            }
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
}

// Newsletter form handling
function initNewsletterForms() {
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
}

// Property contact form (for property detail page)
function initPropertyContactForm() {
    const contactForm = document.querySelector('.property-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            if (name && email && phone) {
                alert('Thank you for your interest! We will contact you soon about this property.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
}

// Initialize all forms
function initAllForms() {
    initContactForm();
    initSearchForm();
    initFilterForm();
    initNewsletterForms();
    initPropertyContactForm();
}
