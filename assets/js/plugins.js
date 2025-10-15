// ================================================
// Real Estate Template - Plugin Initializations
// Version: 1.0
// Author: SmartFusion
// ================================================

(function() {
    'use strict';

    // ================ AOS (Animate on Scroll) ================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // ================ Owl Carousel ================
    if (typeof $ !== 'undefined' && $.fn.owlCarousel) {
        // Featured Properties Carousel
        $('.featured-properties-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });

        // Testimonials Carousel
        $('.testimonials-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1200: { items: 3 }
            }
        });

        // Property Detail Gallery
        $('.property-detail-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            items: 1
        });

        // Similar Properties Carousel
        $('.similar-properties-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });

        // Agent Properties Carousel
        $('.agent-properties-carousel').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            dots: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: { items: 1 },
                768: { items: 2 }
            }
        });
    }

    // ================ Lightbox / GLightbox ================
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true
        });
    }

    // Alternative: Simple Lightbox Implementation
    const lightboxImages = document.querySelectorAll('[data-lightbox]');
    
    if (lightboxImages.length > 0) {
        lightboxImages.forEach(img => {
            img.addEventListener('click', function(e) {
                e.preventDefault();
                openLightbox(this.getAttribute('href'));
            });
        });
    }

    function openLightbox(imageSrc) {
        const lightbox = document.createElement('div');
        lightbox.className = 'custom-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-overlay">
                <span class="lightbox-close">&times;</span>
                <img src="${imageSrc}" alt="Property Image">
                <button class="lightbox-prev"><i class="fas fa-chevron-left"></i></button>
                <button class="lightbox-next"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', () => {
            lightbox.remove();
        });
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                this.remove();
            }
        });
    }

    // ================ Mapbox Integration ================
    const propertyMaps = document.querySelectorAll('.property-map');
    
    propertyMaps.forEach(mapElement => {
        const lat = parseFloat(mapElement.getAttribute('data-lat') || '28.6139');
        const lng = parseFloat(mapElement.getAttribute('data-lng') || '77.2090');
        const mapId = mapElement.id;
        
        // Simple fallback map using iframe (replace with actual Mapbox when API key available)
        if (!mapElement.querySelector('iframe')) {
            mapElement.innerHTML = `
                <iframe 
                    width="100%" 
                    height="100%" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0" 
                    src="https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}&layer=mapnik&marker=${lat},${lng}"
                    style="border: 1px solid var(--gray-light); border-radius: var(--border-radius);">
                </iframe>
            `;
        }
    });

    // Mapbox GL JS Implementation (when API key is available)
    /*
    if (typeof mapboxgl !== 'undefined') {
        mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
        
        propertyMaps.forEach(mapElement => {
            const lat = parseFloat(mapElement.getAttribute('data-lat') || '28.6139');
            const lng = parseFloat(mapElement.getAttribute('data-lng') || '77.2090');
            
            const map = new mapboxgl.Map({
                container: mapElement.id,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: 14
            });
            
            new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map);
                
            map.addControl(new mapboxgl.NavigationControl());
        });
    }
    */

    // ================ Isotope (Property Filtering) ================
    if (typeof Isotope !== 'undefined') {
        const propertyGrid = document.querySelector('.isotope-grid');
        
        if (propertyGrid) {
            const iso = new Isotope(propertyGrid, {
                itemSelector: '.property-item',
                layoutMode: 'fitRows'
            });
            
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filterValue = this.getAttribute('data-filter');
                    iso.arrange({ filter: filterValue });
                    
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        }
    }

    // ================ Chart.js (Dashboard Analytics) ================
    if (typeof Chart !== 'undefined') {
        // Property Views Chart
        const viewsChart = document.getElementById('viewsChart');
        if (viewsChart) {
            new Chart(viewsChart, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Property Views',
                        data: [120, 190, 150, 220, 180, 250],
                        borderColor: '#0078D7',
                        backgroundColor: 'rgba(0, 120, 215, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }

        // Inquiries Chart
        const inquiriesChart = document.getElementById('inquiriesChart');
        if (inquiriesChart) {
            new Chart(inquiriesChart, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Inquiries',
                        data: [45, 67, 54, 78, 65, 89],
                        backgroundColor: '#F4A100'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }

        // Property Types Chart
        const typesChart = document.getElementById('typesChart');
        if (typesChart) {
            new Chart(typesChart, {
                type: 'doughnut',
                data: {
                    labels: ['Residential', 'Commercial', 'Land', 'PG/Hostel'],
                    datasets: [{
                        data: [45, 25, 20, 10],
                        backgroundColor: ['#0078D7', '#F4A100', '#28A745', '#17A2B8']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }
    }

    // ================ Image Upload Preview ================
    const imageUploadInputs = document.querySelectorAll('input[type="file"][accept*="image"]');
    
    imageUploadInputs.forEach(input => {
        input.addEventListener('change', function() {
            const preview = this.parentElement.querySelector('.image-preview');
            
            if (preview && this.files && this.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                };
                
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    // ================ Select2 (Enhanced Dropdowns) ================
    if (typeof $ !== 'undefined' && $.fn.select2) {
        $('.select2').select2({
            theme: 'default',
            width: '100%'
        });
    }

    // ================ Date Range Picker ================
    if (typeof $ !== 'undefined' && $.fn.daterangepicker) {
        $('.daterange').daterangepicker({
            locale: {
                format: 'DD/MM/YYYY'
            }
        });
    }

    // ================ Number Input Spinner ================
    const numberInputs = document.querySelectorAll('.number-input');
    
    numberInputs.forEach(container => {
        const input = container.querySelector('input[type="number"]');
        const increment = container.querySelector('.increment');
        const decrement = container.querySelector('.decrement');
        
        if (increment) {
            increment.addEventListener('click', () => {
                input.stepUp();
                input.dispatchEvent(new Event('change'));
            });
        }
        
        if (decrement) {
            decrement.addEventListener('click', () => {
                input.stepDown();
                input.dispatchEvent(new Event('change'));
            });
        }
    });

    // ================ Modal Functionality ================
    const modalTriggers = document.querySelectorAll('[data-modal]');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.classList.add('show');
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const modalClosers = document.querySelectorAll('[data-dismiss="modal"]');
    
    modalClosers.forEach(closer => {
        closer.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }, 300);
            }
        });
    });

    // Close modal on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
                setTimeout(() => {
                    this.style.display = 'none';
                    document.body.style.overflow = '';
                }, 300);
            }
        });
    });

})();

