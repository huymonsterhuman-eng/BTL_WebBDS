// popup.js - Popup Modal Handling

// Initialize popup
function initializePopup() {
    // Check if user has opted out of popup
    if (localStorage.getItem('popupDontShowAgain') === 'true') return;

    // Track home visits
    let visitCount = parseInt(sessionStorage.getItem('homeVisitCount') || '0');
    visitCount++;
    sessionStorage.setItem('homeVisitCount', visitCount);

    // Create popup HTML
    const popupHTML = `
        <style>
            .popup-modal {
                animation: slideUp 0.5s ease-out;
            }
            .popup-minimized {
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: #fff;
                padding: 15px;
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                z-index: 9998;
                display: none;
                flex-direction: column;
                gap: 8px;
                width: 260px;
                border-left: 4px solid #e73c3cff;
                animation: slideUp 0.5s ease-out;
            }
            .popup-minimized h4 {
                margin: 0;
                color: #333;
                font-size: 16px;
            }
            .popup-minimized p {
                margin: 0;
                font-size: 13px;
                color: #666;
                line-height: 1.4;
            }
            .popup-minimized .mini-actions {
                display: flex;
                gap: 10px;
                margin-top: 5px;
            }
            .popup-minimized button {
                padding: 6px 12px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                border: none;
                transition: all 0.3s ease;
            }
            .btn-mini-primary {
                background: #e73c3cff;
                color: white;
                flex: 1;
            }
            .btn-mini-primary:hover {
                background: #e73c3cff;
            }
            .btn-mini-close {
                background: #f5f5f5;
                color: #666;
            }
            .btn-mini-close:hover {
                background: #e0e0e0;
            }
            @keyframes slideUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        </style>
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
                    <div style="text-align: center; margin-top: 10px;">
                        <button type="button" id="dontShowAgainBtn" style="background: none; border: none; color: #888; font-size: 12px; cursor: pointer; text-decoration: underline;">Don't show again</button>
                    </div>
                </form>
            </div>
        </div>
        
        <!-- Minimized Popup -->
        <div class="popup-minimized" id="minimizedPopup">
            <h4>Need Advice?</h4>
            <p>Get expert recommendations for your dream property.</p>
            <div class="mini-actions">
                <button class="btn-mini-primary" id="openFullPopup">Contact Us</button>
                <button class="btn-mini-close" id="closeMiniPopup">Close</button>
            </div>
        </div>
    `;

    // Add popup to body
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    const popup = document.getElementById('customerPopup');
    const closePopup = document.getElementById('closePopup');
    const laterBtn = document.getElementById('laterBtn');
    const dontShowAgainBtn = document.getElementById('dontShowAgainBtn');
    const popupForm = document.getElementById('popupForm');
    
    // Minimized elements
    const minimizedPopup = document.getElementById('minimizedPopup');
    const openFullPopupBtn = document.getElementById('openFullPopup');
    const closeMiniPopupBtn = document.getElementById('closeMiniPopup');

    // Show popup logic
    const showImmediately = sessionStorage.getItem('showPopupImmediately');
    
    if (visitCount > 1) {
        // Show minimized popup immediately for returning visitors
        minimizedPopup.style.display = 'flex';
    } else {
        // First visit: Show full popup
        if (showImmediately === 'true') {
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            sessionStorage.removeItem('showPopupImmediately');
        } else {
            setTimeout(() => {
                if (minimizedPopup.style.display !== 'flex') {
                    popup.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            }, 3000);
        }
    }

    // Set flag for next refresh
    window.addEventListener('beforeunload', function() {
        sessionStorage.setItem('showPopupImmediately', 'true');
    });

    // Close popup functions
    function closePopupModal() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Show minimized popup when closing full popup
        minimizedPopup.style.display = 'flex';
    }

    closePopup.addEventListener('click', closePopupModal);
    laterBtn.addEventListener('click', closePopupModal);
    
    if (dontShowAgainBtn) {
        dontShowAgainBtn.addEventListener('click', function() {
            localStorage.setItem('popupDontShowAgain', 'true');
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
            minimizedPopup.style.display = 'none';
        });
    }

    popup.addEventListener('click', function(e) {
        if (e.target === popup) closePopupModal();
    });
    
    // Minimized popup events
    openFullPopupBtn.addEventListener('click', function() {
        minimizedPopup.style.display = 'none';
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeMiniPopupBtn.addEventListener('click', function() {
        minimizedPopup.style.display = 'none';
    });

    popupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('popupName').value;
        const email = document.getElementById('popupEmail').value;
        const phone = document.getElementById('popupPhone').value;
        
        if (name && email && phone) {
            alert('Thank you! Our expert will contact you within 24 hours with personalized advice.');
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
            minimizedPopup.style.display = 'none'; // Hide both
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

// Check if popup should be shown
function shouldShowPopup() {
    const currentLocation = window.location.pathname;
    const currentPage = currentLocation.split('/').pop().toLowerCase();
    const pagesWithoutPopup = ['about.html', 'agents.html', 'properties.html', 'contact.html', 'blog1.html', 'blog2.html', 'blog3.html', 'property-detail.html'];
    
    return !pagesWithoutPopup.includes(currentPage);
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
