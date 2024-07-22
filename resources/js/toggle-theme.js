function updateTheme(isLightTheme) {
    document.body.classList.toggle('light-theme', isLightTheme);
    document.body.classList.toggle('dark-theme', !isLightTheme);
    document.getElementById('toggleIcon').src = isLightTheme ? 'resources/css/css-images/moon-light-theme.svg' : 'resources/css/css-images/sun-dark-theme.svg';
    document.getElementById('navbarLogo').src = isLightTheme ? 'resources/css/css-images/logo-light-theme.svg' : 'resources/css/css-images/logo-dark-theme.svg';
    localStorage.setItem('isLightTheme', isLightTheme.toString());
}

let isLightTheme = localStorage.getItem('isLightTheme') === 'true';

document.addEventListener('DOMContentLoaded', () => updateTheme(isLightTheme));

document.querySelector('.toggle-theme').addEventListener('click', () => {
    isLightTheme = !isLightTheme;
    updateTheme(isLightTheme);
});