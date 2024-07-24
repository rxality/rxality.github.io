const body = document.body;
const toggleIcon = document.getElementById('toggleIcon');
const navbarLogo = document.getElementById('navbarLogo');
const toggleThemeButton = document.querySelector('.toggle-theme');

const themeConfig = {
    light: {
        bodyClass: 'light-theme',
        toggleIconSrc: 'resources/css/css-images/moon-light-theme.svg',
        navbarLogoSrc: 'resources/css/css-images/logo-light-theme.svg',
        ariaLabel: 'Switch to dark theme'
    },
    dark: {
        bodyClass: 'dark-theme',
        toggleIconSrc: 'resources/css/css-images/sun-dark-theme.svg',
        navbarLogoSrc: 'resources/css/css-images/logo-dark-theme.svg',
        ariaLabel: 'Switch to light theme'
    }
};

function updateTheme(isLightTheme) {
    const theme = isLightTheme ? themeConfig.light : themeConfig.dark;
    body.classList.add(theme.bodyClass);
    body.classList.remove(isLightTheme ? themeConfig.dark.bodyClass : themeConfig.light.bodyClass);
    toggleIcon.src = theme.toggleIconSrc;
    navbarLogo.src = theme.navbarLogoSrc;
    toggleThemeButton.setAttribute('aria-label', theme.ariaLabel);
    localStorage.setItem('isLightTheme', isLightTheme.toString());
}

let isLightTheme = localStorage.getItem('isLightTheme') === 'true';

document.addEventListener('DOMContentLoaded', () => updateTheme(isLightTheme));

toggleThemeButton.addEventListener('click', () => {
    isLightTheme = !isLightTheme;
    updateTheme(isLightTheme);
});