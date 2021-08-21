// Set the theme from localStorage(if exist) || or set default light
let theme = localStorage.getItem('theme') || 'light';
// Activate the current theme (using class)
body.classList = theme;
// Or Activate the current theme (using attribute)
// body.setAttribute('color-theme', theme);
// Available Themes
let available_themes = document.querySelectorAll('[dd-theme]');
/** Light / Dark theme Toggle */
// Toggle Dark / Light theme
let _toggler = document.querySelector('[dd-toggle]');
_toggler.addEventListener('click', toggleTheme);
// Function: toggle theme(light & dark)
function toggleTheme() {
    // Toggle light / dark theme
    ( theme == 'light' ? theme = 'dark' : theme = 'light');
    // Apply class to body (using class)
    body.classList = theme;
    // Apply class to body (using attribute)
    // body.setAttribute('color-theme', theme);
    // Store theme var to localStorage
    localStorage.setItem('theme', theme );
    // Disable other themes
    available_themes.forEach(e => {
    e.classList = 'theme--label';
    });
}
/* --- X --- */

/** Switch Theme **/
available_themes.forEach(e => {
    ( window.localStorage.getItem('theme') == e.getAttribute('dd-theme') ? e.classList.add('active') : null );
    e.addEventListener('click', switchTheme);
});

var ctnr = document.querySelector("#cards-container");
for(let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let todo = localStorage.getItem(key);
    if(key != "theme" && key != "caprice_status"){
        ctnr.innerHTML = ctnr.innerHTML + 
        `<div class="card">
            <h2 class="card__title">${key}</h2>
            <p class="p-text">${todo}</p>
        </div>`
    }
}


function switchTheme() {
    available_themes.forEach(e => {
    e.classList = 'theme--label';
    });
    let theme = this.getAttribute('dd-theme');
    this.classList.add('active');
    // Activate the theme(using class)
    body.classList = theme;
    // Activate the theme(attribute class)
    // body.setAttribute('color-theme', theme);
    localStorage.setItem('theme', theme);
}
/* --- X --- */