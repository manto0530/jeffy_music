// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
// app/javascript/application.js

import "@hotwired/turbo-rails"
import "controllers" 
// ... (other default imports)

// --- 1. GLOBALIZE JQUERY (MUST COME FIRST) ---
// Note: 'jquery' must match the name pinned in importmap.rb
import jQuery from "jquery"
window.jQuery = jQuery
window.$ = jQuery

// --- 2. IMPORT ALL YOUR PLUGINS/FILES ---
// The order matters! Dependent files (like jquery-form) must come first.
import "jquery-form"
import "jquery-ajaxchimp"
import "jquery-counterup"
import "bootstrap"

// Library dependencies
import "imagesloaded-pkgd"
import "isotope-pkgd"
import "gijgo"

// Your custom/main application files
import "ajax-form"
import "audioplayer"
import "contact"


// If your plugins need initialization on page load, use the Turbo event:
document.addEventListener("turbo:load", () => {
    // Example initialization logic here if needed
    // e.g. $('.counter').counterUp();
});