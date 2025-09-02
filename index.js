
        function showSection(sectionId) {
            // Ocultar todas las secciones
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostrar la sección seleccionada
            document.getElementById(sectionId).classList.add('active');
            
            // Actualizar botones de navegación
            const buttons = document.querySelectorAll('.nav-btn');
            buttons.forEach(button => {
                button.classList.remove('active');
            });
            
            event.target.classList.add('active');
            
            // Scroll suave hacia arriba
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function toggleContent(contentId) {
            const content = document.getElementById(contentId);
            const isExpanded = content.classList.contains('expanded');
            
            if (isExpanded) {
                content.classList.remove('expanded');
                content.previousElementSibling.innerHTML = content.previousElementSibling.innerHTML.replace('▲', '▼');
            } else {
                content.classList.add('expanded');
                content.previousElementSibling.innerHTML = content.previousElementSibling.innerHTML.replace('▼', '▲');
            }
        }

        // Agregar efectos de parallax suaves
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('body');
            const speed = scrolled * 0.5;
            
            parallax.style.backgroundPosition = `center ${speed}px`;
        });

        // Animación de aparición de elementos
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observar elementos para animaciones
        document.querySelectorAll('.highlight-box, .reference-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
