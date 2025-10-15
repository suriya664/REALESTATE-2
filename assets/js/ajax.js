// ================================================
// Real Estate Template - AJAX Functions
// Version: 1.0
// Author: SmartFusion
// ================================================

(function() {
    'use strict';

    // ================ API Base URL ================
    const API_BASE_URL = '/api'; // Change to your actual API endpoint

    // ================ Contact Form Submission ================
    const contactForm = document.querySelector('#contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            try {
                const response = await fetch(`${API_BASE_URL}/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    showMessage('success', 'Thank you! Your message has been sent successfully.');
                    this.reset();
                } else {
                    showMessage('error', result.message || 'Something went wrong. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                // For demo purposes, show success even without backend
                showMessage('success', 'Thank you! Your message has been sent successfully. (Demo Mode)');
                this.reset();
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // ================ Property Inquiry Form ================
    const inquiryForm = document.querySelector('#inquiryForm');
    
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            try {
                const response = await fetch(`${API_BASE_URL}/inquiry`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    showMessage('success', 'Your inquiry has been submitted! We will contact you soon.');
                    this.reset();
                    
                    // Close modal if exists
                    const modal = this.closest('.modal');
                    if (modal) {
                        closeModal(modal);
                    }
                } else {
                    showMessage('error', 'Failed to submit inquiry. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                showMessage('success', 'Your inquiry has been submitted! (Demo Mode)');
                this.reset();
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // ================ Login Form ================
    const loginForm = document.querySelector('#loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            try {
                const response = await fetch(`${API_BASE_URL}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    // Store auth token
                    localStorage.setItem('authToken', result.token);
                    localStorage.setItem('user', JSON.stringify(result.user));
                    
                    showMessage('success', 'Login successful! Redirecting...');
                    
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1500);
                } else {
                    showMessage('error', result.message || 'Invalid credentials');
                }
            } catch (error) {
                console.error('Error:', error);
                // Demo mode - allow login
                localStorage.setItem('user', JSON.stringify({
                    name: data.email.split('@')[0],
                    email: data.email
                }));
                showMessage('success', 'Login successful! (Demo Mode)');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // ================ Register Form ================
    const registerForm = document.querySelector('#registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const password = this.querySelector('[name="password"]').value;
            const confirmPassword = this.querySelector('[name="confirm_password"]').value;
            
            if (password !== confirmPassword) {
                showMessage('error', 'Passwords do not match!');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            delete data.confirm_password;
            
            try {
                const response = await fetch(`${API_BASE_URL}/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    showMessage('success', 'Registration successful! Redirecting to login...');
                    
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 2000);
                } else {
                    showMessage('error', result.message || 'Registration failed');
                }
            } catch (error) {
                console.error('Error:', error);
                showMessage('success', 'Registration successful! (Demo Mode)');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // ================ Add Property Form ================
    const addPropertyForm = document.querySelector('#addPropertyForm');
    
    if (addPropertyForm) {
        addPropertyForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            
            const formData = new FormData(this);
            
            try {
                const response = await fetch(`${API_BASE_URL}/properties`, {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    showMessage('success', 'Property added successfully!');
                    
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 2000);
                } else {
                    showMessage('error', 'Failed to add property. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                showMessage('success', 'Property added successfully! (Demo Mode)');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 2000);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // ================ Newsletter Subscription ================
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const emailInput = this.querySelector('input[type="email"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            const email = emailInput.value;
            
            try {
                const response = await fetch(`${API_BASE_URL}/newsletter`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email })
                });
                
                if (response.ok) {
                    showMessage('success', 'Thank you for subscribing!');
                    emailInput.value = '';
                } else {
                    showMessage('error', 'Subscription failed. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                showMessage('success', 'Thank you for subscribing! (Demo Mode)');
                emailInput.value = '';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    });

    // ================ Load Properties (AJAX) ================
    async function loadProperties(filters = {}) {
        const propertyGrid = document.querySelector('.property-grid');
        
        if (!propertyGrid) return;
        
        try {
            const params = new URLSearchParams(filters);
            const response = await fetch(`${API_BASE_URL}/properties?${params}`);
            
            if (response.ok) {
                const properties = await response.json();
                renderProperties(properties);
            }
        } catch (error) {
            console.error('Error loading properties:', error);
            // Load demo properties
            loadDemoProperties();
        }
    }

    // ================ Render Properties ================
    function renderProperties(properties) {
        const propertyGrid = document.querySelector('.property-grid');
        
        if (!propertyGrid) return;
        
        propertyGrid.innerHTML = properties.map(property => `
            <div class="col-lg-4 col-md-6 property-item" data-category="${property.category}">
                <div class="property-card card">
                    <div class="property-card-img">
                        <img src="${property.image}" alt="${property.title}">
                        <span class="property-badge ${property.type}">${property.type}</span>
                        <span class="property-price">₹${formatIndianPrice(property.price)}</span>
                        <button class="favorite-btn" data-property-id="${property.id}">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="property-details">
                        <h3 class="property-title">${property.title}</h3>
                        <p class="property-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${property.location}
                        </p>
                        <div class="property-meta">
                            <span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                            <span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                            <span><i class="fas fa-ruler-combined"></i> ${property.area} sq.ft</span>
                        </div>
                        <a href="property-details.html?id=${property.id}" class="btn btn-primary w-100 mt-3">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ================ Format Indian Price ================
    function formatIndianPrice(amount) {
        if (amount >= 10000000) {
            return (amount / 10000000).toFixed(2) + ' Cr';
        } else if (amount >= 100000) {
            return (amount / 100000).toFixed(2) + ' Lakh';
        } else {
            return amount.toLocaleString('en-IN');
        }
    }

    // ================ Show Message ================
    function showMessage(type, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `alert alert-${type} alert-dismissible fade show`;
        messageDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
        `;
        
        // Insert at top of page or in specific container
        const container = document.querySelector('.message-container') || document.body;
        container.insertBefore(messageDiv, container.firstChild);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // ================ Close Modal ================
    function closeModal(modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // ================ Check Authentication ================
    function checkAuth() {
        const authToken = localStorage.getItem('authToken');
        const protectedPages = ['dashboard.html', 'add-property.html', 'admin-dashboard.html'];
        const currentPage = window.location.pathname.split('/').pop();
        
        if (protectedPages.includes(currentPage) && !authToken) {
            window.location.href = 'login.html';
        }
    }

    // ================ Logout Function ================
    window.logout = function() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        showMessage('success', 'Logged out successfully!');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    };

    // ================ Initialize ================
    document.addEventListener('DOMContentLoaded', () => {
        checkAuth();
        
        // Load user info if logged in
        const user = JSON.parse(localStorage.getItem('user') || 'null');
        if (user) {
            const userNameElements = document.querySelectorAll('.user-name');
            userNameElements.forEach(el => {
                el.textContent = user.name || user.email;
            });
        }
    });

})();

