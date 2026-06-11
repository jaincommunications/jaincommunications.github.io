const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const monthlyBillInput = document.getElementById('monthlyBill');
const roofSizeInput = document.getElementById('roofSize');
const sunlightInput = document.getElementById('sunlight');

const billValue = document.getElementById('billValue');
const roofValue = document.getElementById('roofValue');
const annualSavings = document.getElementById('annualSavings');
const tenYearSavings = document.getElementById('tenYearSavings');
const twentyFiveYearSavings = document.getElementById('twentyFiveYearSavings');
const co2Reduction = document.getElementById('co2Reduction');

function calculateSavings() {
    const monthlyBill = parseFloat(monthlyBillInput.value);
    const roofSize = parseFloat(roofSizeInput.value);
    const sunlight = parseFloat(sunlightInput.value);

    billValue.textContent = monthlyBill;
    roofValue.textContent = roofSize;

    const systemCapacity = (roofSize / 100) * 5;
    const dailyGeneration = systemCapacity * sunlight * 0.75;
    const monthlyGeneration = dailyGeneration * 30;
    const annualGeneration = monthlyGeneration * 12;

    const costPerKwh = 0.10;
    const annualSavingsAmount = annualGeneration * costPerKwh;
    const tenYearAmount = annualSavingsAmount * 10 * 0.95;
    const twentyFiveYearAmount = annualSavingsAmount * 25 * 0.90;

    const co2PerYear = (annualGeneration * 0.85) / 1000;

    annualSavings.textContent = Math.round(annualSavingsAmount);
    tenYearSavings.textContent = Math.round(tenYearAmount);
    twentyFiveYearSavings.textContent = Math.round(twentyFiveYearAmount);
    co2Reduction.textContent = Math.round(co2PerYear);
}

monthlyBillInput.addEventListener('input', calculateSavings);
roofSizeInput.addEventListener('input', calculateSavings);
sunlightInput.addEventListener('change', calculateSavings);

calculateSavings();

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const email = this.querySelector('input[placeholder="Your Email"]').value;
    const phone = this.querySelector('input[placeholder="Your Phone"]').value;
    const service = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;

    if (!name || !email || !phone || !service || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email', 'error');
        return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        showNotification('Please enter a valid phone number', 'error');
        return;
    }

    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;

    const whatsappNumber = '919041260001';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    showNotification('Message sent successfully! Opening WhatsApp...', 'success');

    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 1000);

    this.reset();
});

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#25D366' : '#e74c3c'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': 'Project %1 of %2'
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .service-card, .gallery-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--gold) !important;
    }
`;
document.head.appendChild(style);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePerformance);
} else {
    initializePerformance();
}

function initializePerformance() {
    const criticalImages = document.querySelectorAll('.hero-image img, .about-image img');
    criticalImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        document.head.appendChild(link);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Jain Communications',
        'image': 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400',
        'description': 'Premium solar energy solutions for residential, commercial, and industrial customers in Punjab.',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Kapurthala Road, Nakodar',
            'addressLocality': 'Punjab',
            'postalCode': '144621',
            'addressCountry': 'IN'
        },
        'telephone': '+919041260001',
        'email': 'navnkd@gmail.com',
        'url': 'https://www.jaincommunications.com',
        'priceRange': '₹₹₹',
        'sameAs': [
            'https://www.facebook.com/jaincommunications',
            'https://www.instagram.com/jaincommunications',
            'https://www.twitter.com/jaincommunications',
            'https://www.linkedin.com/company/jain-communications'
        ]
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptTag);
});

console.log('✅ Jain Communications Solar Website - Loaded Successfully!');