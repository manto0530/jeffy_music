# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "ajax-form", to: "ajax-form.js"
pin "audioplayer", to: "audioplayer.js"
pin "bootstrap", to: "bootstrap.min.js"
pin "contact", to: "contact.js"
pin "gijgo", to: "gijgo.min.js"
pin "imagesloaded-pkgd", to: "imagesloaded.pkgd.min.js"
pin "isotope-pkgd", to: "isotope.pkgd.min.js"

# These files look like JQuery plugins, so they must be available via 'import'
pin "jquery-ajaxchimp", to: "jquery.ajaxchimp.min.js"
pin "jquery-counterup", to: "jquery.counterup.min.js"
pin "jquery-form", to: "jquery.form.js"