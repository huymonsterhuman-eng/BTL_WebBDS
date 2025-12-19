// property-detail.js - Property Detail Page Logic

// Function to get property ID from URL
function getPropertyIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1'; // Default to property 1 if no ID
}

// Function to change main gallery image
function changeMainImage(src) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = src;
        
        // Update active thumbnail
        document.querySelectorAll('.gallery-thumbs .thumb').forEach(thumb => {
            thumb.classList.remove('active');
        });
        event.target.closest('.thumb').classList.add('active');
    }
}

// Function to load property data
function loadPropertyData() {
    const propertyId = getPropertyIdFromURL();
    const property = propertiesData[propertyId];
    
    if (!property) {
        console.error('Property not found');
        return;
    }
    
    // Update page title
    document.title = `${property.title} | Luxury Estates`;
    
    // Update property information
    const updates = {
        'property-title': { type: 'text', value: property.title },
        'property-address': { type: 'html', value: `<i class="fas fa-map-marker-alt"></i> ${property.address}` },
        'property-price': { type: 'text', value: property.price },
        'property-beds': { type: 'text', value: property.beds },
        'property-baths': { type: 'text', value: property.baths },
        'property-area': { type: 'text', value: property.area },
        'property-parking': { type: 'text', value: property.parking },
        'property-description': { type: 'text', value: property.description },
        'property-id': { type: 'text', value: property.id },
        'property-type': { type: 'text', value: property.type },
        'property-year': { type: 'text', value: property.year }
    };
    
    Object.keys(updates).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (updates[id].type === 'html') {
                element.innerHTML = updates[id].value;
            } else {
                element.textContent = updates[id].value;
            }
        }
    });
    
    // Update gallery images
    const mainImage = document.getElementById('main-image');
    const galleryThumbs = document.querySelector('.gallery-thumbs');
    
    if (mainImage && property.images.length > 0) {
        mainImage.src = property.images[0];
    }
    
    if (galleryThumbs && property.images.length > 0) {
        galleryThumbs.innerHTML = '';
        property.images.forEach((imageSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imageSrc;
            thumb.alt = 'Thumbnail';
            thumb.className = 'thumb' + (index === 0 ? ' active' : '');
            thumb.onclick = function() {
                changeMainImage(this.src);
            };
            galleryThumbs.appendChild(thumb);
        });
    }
}

// Scroll to contact form if anchor is present
function scrollToContact() {
    if (window.location.hash === '#contact') {
        setTimeout(() => {
            const contactCard = document.getElementById('contact');
            if (contactCard) {
                contactCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 500);
    }
}

// Initialize property detail page
function initPropertyDetail() {
    loadPropertyData();
    scrollToContact();
    initPropertyContactForm(); // From forms.js
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initPropertyDetail();
});
