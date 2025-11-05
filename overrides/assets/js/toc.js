document.addEventListener("DOMContentLoaded", function () {
    let tocSidebar = document.querySelector('.md-sidebar--secondary');
    if (!tocSidebar) return;

    tocSidebar.querySelectorAll(".md-nav__item").forEach(item => {
        let subList = item.querySelector(".md-nav__list");
        let link = item.querySelector(".md-nav__link");

        if (subList) {
            item.classList.add("has-children");

            link.addEventListener("click", function (event) {
                event.preventDefault();

                let targetId = link.getAttribute("href");
                if (targetId) {
                    let targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }

                subList.style.display = subList.style.display === "block" ? "none" : "block";
                item.classList.toggle("md-nav__item--active");
            });
        }
    });

    // Funzione per trasformare i link del menu laterale da index/index.html a solo index
    function fixSidebarIndexLinks() {
        // Seleziona il menu laterale principale (sidebar primario)
        let primarySidebar = document.querySelector('.md-sidebar--primary');
        if (!primarySidebar) return;

        // Trova tutti i link nel menu laterale
        let sidebarLinks = primarySidebar.querySelectorAll('a[href*="index/index.html"]');
        
        sidebarLinks.forEach(link => {
            let href = link.getAttribute('href');
            if (href && href.includes('index/index.html')) {
                // Trasforma index/index.html in solo index
                let newHref = href.replace('index/index.html', 'index');
                link.setAttribute('href', newHref);
                console.log('Fixed sidebar link:', href, '->', newHref);
            }
        });
    }

    // Funzione per aggiungere /index.html quando si clicca sul logo
    function addIndexHtmlToLogo() {
        // Seleziona il logo (di solito ha classe md-header__button o è dentro md-header)
        let logo = document.querySelector('.md-header__button.md-logo, .md-logo, a[title*="home"], a[title*="Home"]');
        
        if (!logo) {
            // Prova a cercare link nel header che potrebbero essere il logo
            let headerLinks = document.querySelectorAll('.md-header a');
            headerLinks.forEach(link => {
                // Cerca link che puntano alla root o hanno attributi tipici del logo
                let href = link.getAttribute('href');
                if (href === '/' || href === './' || href === '../' || link.querySelector('img, svg')) {
                    logo = link;
                    return;
                }
            });
        }

        if (logo) {
            logo.addEventListener('click', function(event) {
                event.preventDefault();
                
                // Determina il percorso base corrente
                let currentPath = window.location.pathname;
                let basePath = '/';
                
                // Se siamo in una sottocartella, mantieni la struttura
                if (currentPath.includes('/it/') || currentPath.includes('/en/')) {
                    let pathParts = currentPath.split('/');
                    let langIndex = pathParts.findIndex(part => part === 'it' || part === 'en');
                    if (langIndex !== -1) {
                        basePath = '/' + pathParts.slice(1, langIndex + 1).join('/') + '/';
                    }
                }
                
                // Naviga al percorso con /index.html
                let newUrl = basePath + 'index.html';
                console.log('Logo clicked, navigating to:', newUrl);
                window.location.href = newUrl;
            });
            
            console.log('Logo click handler added');
        } else {
            console.log('Logo element not found');
        }
    }

    // Esegui le funzioni
    fixSidebarIndexLinks();
    addIndexHtmlToLogo();
});
