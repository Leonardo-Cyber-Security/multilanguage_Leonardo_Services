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
                let newHref = href.replace('index/index.html', 'index.html');
                link.setAttribute('href', newHref);
                console.log('Fixed sidebar link:', href, '->', newHref);
            }
        });
    }

    // Funzione per sostituire il "." del logo con index.html
    function fixLogoLink() {
        // Cerca il logo con href="."
        let logoLinks = document.querySelectorAll('a.md-nav__button');
        
        logoLinks.forEach(logo => {
            let href = logo.getAttribute('href');
            if (href === '.' || href === '..') {
                // Sostituisce "." con "index.html"
                logo.setAttribute('href', 'index.html');
                console.log('Fixed logo link from "." to "index.html"');
            }
        });
    }

    // Funzione per trasformare i link anchor da path/# a path/index.html#
    function fixAnchorLinks() {
        // Seleziona tutti i link nel documento
        let allLinks = document.querySelectorAll('a[href]');
        
        allLinks.forEach(link => {
            let href = link.getAttribute('href');
            if (href) {
                // Controlla se il link ha il pattern path/#anchor (ma non inizia con #)
                let anchorMatch = href.match(/^([^#]+)\/#{1}(.+)$/);
                if (anchorMatch) {
                    let path = anchorMatch[1]; // La parte prima di /#
                    let anchor = anchorMatch[2]; // La parte dopo #
                    
                    // Trasforma in path/index.html#anchor
                    let newHref = path + '/index.html#' + anchor;
                    link.setAttribute('href', newHref);
                    console.log('Fixed anchor link:', href, '->', newHref);
                }
                // Controlla se il link finisce con / (ma non è solo "/")
                else if (href.endsWith('/') && href !== '/') {
                    // Aggiunge index.html alla fine
                    let newHref = href + 'index.html';
                    link.setAttribute('href', newHref);
                    console.log('Fixed trailing slash link:', href, '->', newHref);
                }
            }
        });
    }

    // Funzione per rimuovere overflow-x dai wrapper delle tabelle
    function removeTableOverflow() {
        let scrollWraps = document.querySelectorAll('.md-typeset__scrollwrap');
        
        scrollWraps.forEach(wrap => {
            // Rimuove overflow-x: auto quando è sullo schermo
            wrap.style.overflowX = 'visible';
            console.log('Removed overflow-x from table wrapper');
        });
    }

    // Funzione per creare il pulsante fullscreen
    function createFullscreenButton() {
        // Verifica se il pulsante esiste già
        if (document.getElementById('fullscreen-toggle')) return;
        
        // Cerca il container dei pulsanti del header (dove c'è il language switcher)
        let headerActions = document.querySelector('.md-header__option');
        if (!headerActions) {
            // Fallback: cerca altri possibili container
            headerActions = document.querySelector('.md-header__inner');
        }
        
        if (headerActions) {
            // Crea il pulsante fullscreen
            const fullscreenBtn = document.createElement('button');
            fullscreenBtn.id = 'fullscreen-toggle';
            fullscreenBtn.className = 'md-header__button';
            fullscreenBtn.title = 'Modalità schermo intero';
            fullscreenBtn.innerHTML = '⛶';
            fullscreenBtn.style.cssText = `
                background: transparent;
                border: none;
                color: inherit;
                font-size: 18px;
                cursor: pointer;
                padding: 8px;
                margin-left: 8px;
                border-radius: 4px;
                transition: background-color 0.2s;
            `;
            
            // Aggiungi hover effect
            fullscreenBtn.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            });
            
            fullscreenBtn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
            });
            
            // Aggiungi event listener per toggle fullscreen
            fullscreenBtn.addEventListener('click', toggleFullscreenMode);
            
            // Inserisci il pulsante nel header
            headerActions.appendChild(fullscreenBtn);
            
            console.log('Fullscreen button created and added to header');
        } else {
            console.warn('Header container not found for fullscreen button');
        }
    }

    // Funzione per attivare/disattivare la modalità fullscreen
    function toggleFullscreenMode() {
        const body = document.body;
        const button = document.getElementById('fullscreen-toggle');
        const isFullscreen = body.classList.contains('fullscreen-mode');
        
        if (isFullscreen) {
            // Esci dalla modalità fullscreen
            body.classList.remove('fullscreen-mode');
            button.innerHTML = '⛶';
            button.title = 'Modalità schermo intero';
            console.log('Exited fullscreen mode');
        } else {
            // Entra in modalità fullscreen
            body.classList.add('fullscreen-mode');
            button.innerHTML = '⛷';
            button.title = 'Esci da schermo intero';
            console.log('Entered fullscreen mode');
        }
    }

    // Aggiungi listener per ESC key per uscire da fullscreen
    function setupFullscreenEscapeKey() {
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && document.body.classList.contains('fullscreen-mode')) {
                toggleFullscreenMode();
            }
        });
    }

    // Funzione per fixare i link dei risultati di ricerca
    function fixSearchResultLinks() {
        // Osserva il DOM per rilevare quando vengono caricati i risultati di ricerca
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // Cerca i risultati di ricerca aggiunti
                const searchResults = document.querySelectorAll('.md-search-result__link, .md-search-result__article a');
                
                searchResults.forEach(link => {
                    // Evita di aggiungere listener multipli
                    if (link.hasAttribute('data-search-fixed')) return;
                    link.setAttribute('data-search-fixed', 'true');
                    
                    // Aggiungi event listener al click
                    link.addEventListener('click', function(event) {
                        event.preventDefault();
                        
                        let href = this.getAttribute('href');
                        if (!href) return;
                        
                        console.log('Search result clicked:', href);
                        
                        // Se il link contiene un anchor (#)
                        if (href.includes('#')) {
                            const parts = href.split('#');
                            const path = parts[0];
                            const anchor = parts[1];
                            
                            // Se il path non finisce con .html e non è vuoto
                            if (path && !path.endsWith('.html') && !path.endsWith('/')) {
                                href = path + '/index.html#' + anchor;
                            } else if (path && path.endsWith('/')) {
                                href = path + 'index.html#' + anchor;
                            }
                        } else {
                            // Link senza anchor
                            if (!href.endsWith('.html') && !href.endsWith('/')) {
                                href = href + '/index.html';
                            } else if (href.endsWith('/')) {
                                href = href + 'index.html';
                            }
                        }
                        
                        console.log('Fixed search link:', this.getAttribute('href'), '->', href);
                        
                        // Naviga al link corretto
                        window.location.href = href;
                    });
                });
            });
        });
        
        // Osserva il container dei risultati di ricerca
        const searchContainer = document.querySelector('.md-search-result');
        if (searchContainer) {
            observer.observe(searchContainer, {
                childList: true,
                subtree: true
            });
            console.log('Search result observer activated');
        }
        
        // Osserva anche il container principale per catturare l'apertura della ricerca
        const mainContainer = document.querySelector('.md-search');
        if (mainContainer) {
            observer.observe(mainContainer, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['data-md-state']
            });
            console.log('Search container observer activated');
        }
    }

    // Esegui le funzioni
    fixSidebarIndexLinks();
    fixLogoLink();
    fixAnchorLinks();
    removeTableOverflow();
    createFullscreenButton();
    setupFullscreenEscapeKey();
    fixSearchResultLinks();
});
