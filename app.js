document.addEventListener('DOMContentLoaded', function() {

    // --- Sample Data ---
    const properties = [
        {
            id: 1,
            title: 'Modern Seafront Villa',
            location: 'Mumbai',
            price: '95,00,000',
            beds: 4,
            baths: 5,
            area: 3200,
            type: 'Villa',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            title: 'Luxury Downtown Apartment',
            location: 'Delhi',
            price: '60,00,000',
            beds: 3,
            baths: 3,
            area: 1800,
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            title: 'Cozy Suburban Home',
            location: 'Bangalore',
            price: '75,00,000',
            beds: 4,
            baths: 3,
            area: 2500,
            type: 'Villa',
            image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 4,
            title: 'High-Rise Penthouse',
            location: 'Mumbai',
            price: '1,50,00,000',
            beds: 3,
            baths: 4,
            area: 2800,
            type: 'Penthouse',
            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 5,
            title: 'Stylish City Apartment',
            location: 'Pune',
            price: '45,00,000',
            beds: 2,
            baths: 2,
            area: 1200,
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=1278&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 6,
            title: 'Spacious Family Villa',
            location: 'Bangalore',
            price: '85,00,000',
            beds: 5,
            baths: 4,
            area: 3500,
            type: 'Villa',
            image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];

    const testimonials = [
        {
            name: 'Ananya Sharma',
            feedback: 'DreamHomes made finding our perfect home a breeze! The agents were professional, knowledgeable, and incredibly patient. We couldn\'t be happier with our new place.',
            image: 'https://i.pravatar.cc/150?img=1'
        },
        {
            name: 'Rohan Mehta',
            feedback: 'Selling our property through DreamHomes was the best decision we made. They handled everything with such efficiency and got us a fantastic price. Highly recommended!',
            image: 'https://i.pravatar.cc/150?img=2'
        },
        {
            name: 'Priya Patel',
            feedback: 'The team at DreamHomes is exceptional. They listened to our needs and found us a beautiful rental property in a great neighborhood. The entire process was seamless and stress-free.',
            image: 'https://i.pravatar.cc/150?img=3'
        }
    ];

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- Animations on Scroll ---
    const animatedElements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    // --- Property Listings Logic ---
    const propertyListingsContainer = document.getElementById('property-listings');
    const searchForm = document.getElementById('search-form');
    const locationInput = document.getElementById('location-input');
    const typeSelect = document.getElementById('type-select');
    const noResults = document.getElementById('no-results');
    const resetSearchBtn = document.getElementById('reset-search');
    
    function createPropertyCard(property) {
        return `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 fade-in-up">
                <img src="${property.image}" alt="${property.title}" class="w-full h-56 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${property.title}</h3>
                    <p class="text-gray-600 mb-4">${property.location}</p>
                    <div class="flex justify-between items-center text-gray-700 mb-4">
                        <span><svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V4m0 4h4m-4 0l4-4m13 12V16m0 4h-4m4 0l-4-4M3 16v4m0-4h4m-4 0l4 4m13-12V8m0 4h-4m4 0l-4-4"></path></svg>${property.area} sqft</span>
                        <span><svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1z"></path></svg>${property.beds} Beds</span>
                        <span><svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zM3.5 12a8.5 8.5 0 1017 0 8.5 8.5 0 00-17 0z"></path></svg>${property.baths} Baths</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-2xl font-bold text-indigo-600">₹${property.price}</p>
                        <a href="#" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">View Details</a>
                    </div>
                </div>
            </div>
        `;
    }

    function displayProperties(propertyArray) {
        propertyListingsContainer.innerHTML = '';
        if (propertyArray.length === 0) {
            noResults.classList.remove('hidden');
            propertyListingsContainer.classList.add('hidden');
        } else {
            noResults.classList.add('hidden');
            propertyListingsContainer.classList.remove('hidden');
            propertyArray.forEach(property => {
                propertyListingsContainer.innerHTML += createPropertyCard(property);
            });
            // Re-observe new elements for animation
            propertyListingsContainer.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        }
    }
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const location = locationInput.value.trim().toLowerCase();
        const type = typeSelect.value;
        
        const filteredProperties = properties.filter(prop => {
            const locationMatch = prop.location.toLowerCase().includes(location);
            const typeMatch = type === 'all' || prop.type === type;
            return locationMatch && typeMatch;
        });
        
        displayProperties(filteredProperties);
    });

    resetSearchBtn.addEventListener('click', () => {
         locationInput.value = '';
         typeSelect.value = 'all';
         displayProperties(properties);
    });

    // Initial display
    displayProperties(properties);

    // --- Testimonial Slider ---
    const slider = document.getElementById('testimonial-slider');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    let currentIndex = 0;

    function renderTestimonials() {
        slider.innerHTML = '';
        testimonials.forEach(t => {
            const card = `
                <div class="testimonial-card flex-shrink-0 w-full p-4">
                    <div class="bg-indigo-500 p-8 rounded-lg text-center">
                        <p class="text-lg italic mb-4">"${t.feedback}"</p>
                        <p class="font-semibold text-xl">- ${t.name}</p>
                    </div>
                </div>
            `;
            slider.innerHTML += card;
        });
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateSlider();
    });

    // Auto-play testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    }, 5000);
    
    renderTestimonials();

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        formMessage.className = 'text-center mt-4 text-green-600';
        contactForm.reset();
        
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    });
});
