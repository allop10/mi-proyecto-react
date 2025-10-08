document.addEventListener('DOMContentLoaded', () => {

  const showToast = () => {
    const toast = document.getElementById('toast');
    if(toast) {
      toast.classList.remove('opacity-0', 'translate-y-[-20px]');
      toast.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-[-20px]');
      }, 5000);
    }
  };

  document.querySelectorAll('.show-toast').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      showToast();
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast();
    });
  }

  // Loading screen logic
  const loadingScreen = document.getElementById('loading-screen');
  const appContent = document.getElementById('app-content');

  if (loadingScreen && appContent) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        appContent.style.opacity = '1';
        appContent.style.transition = 'opacity 0.5s ease-in';
      }, 500);
    }, 4000);
  } else if (appContent) {
    // If there's no loading screen on the page
    appContent.style.opacity = '1';
  }


  // Navbar logic
  const navbar = document.getElementById('navbar');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('glass-effect', 'shadow-lg');
      } else {
        navbar.classList.remove('glass-effect', 'shadow-lg');
      }
    });
  }

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }
  
  // Service Carousel Logic
  const carouselContainer = document.getElementById('service-carousel-container');
  if (carouselContainer) {
    const services = [
      { title: 'Caja Seca', description: 'Transporte seguro de mercancía general con protección total contra elementos externos.', image: 'Camión de carga con remolque de caja seca blanca en carretera' },
      { title: 'Thermo', description: 'Unidades refrigeradas para productos que requieren temperatura controlada.', image: 'Camión refrigerado thermo transportando productos perecederos' },
      { title: 'Jaula', description: 'Transporte especializado para ganado y animales con máxima ventilación.', image: 'Camión jaula para transporte de ganado en zona rural' },
      { title: 'Plataforma', description: 'Ideal para cargas de gran volumen y maquinaria pesada.', image: 'Camión plataforma cargando maquinaria industrial pesada' },
      { title: 'Torton', description: 'Unidades de gran capacidad para cargas voluminosas.', image: 'Camión torton de gran capacidad en terminal de carga' },
      { title: 'Low Boy', description: 'Transporte de maquinaria extra pesada con altura reducida.', image: 'Camión low boy transportando excavadora en construcción' },
      { title: 'Cama Baja', description: 'Especializado en transporte de equipo pesado y sobredimensionado.', image: 'Camión cama baja transportando equipo industrial pesado' }
    ];
    let currentIndex = 0;

    const renderCarousel = () => {
      const service = services[currentIndex];
      carouselContainer.innerHTML = `
        <div class="relative h-96 overflow-hidden rounded-2xl">
          <div class="absolute inset-0 carousel-slide">
            <div class="relative h-full">
              <img  class="w-full h-full object-cover" alt="Servicio de ${service.title}" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <h3 class="text-3xl font-bold text-white mb-3">${service.title}</h3>
                <p class="text-lg text-gray-200 max-w-2xl">${service.description}</p>
              </div>
            </div>
          </div>
          <button id="prev-slide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button id="next-slide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
        <div id="carousel-indicators" class="flex justify-center mt-6 space-x-2">
          ${services.map((_, index) => `<button data-index="${index}" class="w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-[#005eff] scale-125' : 'bg-white/40 hover:bg-white/60'}"></button>`).join('')}
        </div>
      `;

      document.getElementById('prev-slide').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + services.length) % services.length;
        renderCarousel();
      });

      document.getElementById('next-slide').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % services.length;
        renderCarousel();
      });
      
      document.querySelectorAll('#carousel-indicators button').forEach(button => {
        button.addEventListener('click', () => {
            currentIndex = parseInt(button.dataset.index);
            renderCarousel();
        });
      });
    };

    setInterval(() => {
        currentIndex = (currentIndex + 1) % services.length;
        renderCarousel();
    }, 5000);

    renderCarousel();
  }
  
  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});