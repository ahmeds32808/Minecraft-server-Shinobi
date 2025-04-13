document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Create mobile menu content
    mobileMenu.innerHTML = `
        <div class="mobile-menu-header">
            <div class="logo">
                <img src="server-logo.png" alt="NexusCraft Logo">
                <span class="logo-text">NexusCraft</span>
            </div>
            <div class="close-menu-btn">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="mobile-menu-links">
            <a href="#about">About</a>
            <a href="#rules">Rules</a>
            <a href="#team">Team</a>
            <a href="#gallery">Gallery</a>
            <a href="#discord">Discord</a>
        </div>
    `;
    
    document.body.appendChild(mobileMenu);
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Copy IP address to clipboard
    const ipAddress = document.querySelector('.ip-address');
    if (ipAddress) {
        ipAddress.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied to clipboard!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    }
    
    // Gallery image modal (optional enhancement)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // You could implement a lightbox here
            console.log('Gallery item clicked - implement lightbox if desired');
        });
    });
});