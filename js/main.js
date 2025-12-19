// main.js - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initAllForms();        // From forms.js
    initNavigation();      // From navigation.js
    
    // Initialize popup if needed
    if (shouldShowPopup()) {
        initializePopup(); // From popup.js
    }
});
