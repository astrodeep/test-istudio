/**
 * Application entry point
 */
// Load application styles
import 'slick-carousel';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css'
import '@/scss/style.scss'
import '@/modules/header/header'
import '@/modules/clients/clients'
import '@/modules/faq/faq'

// ================================
// START YOUR APP HERE
// ================================

new WOW.WOW({
    live: false
}).init();
