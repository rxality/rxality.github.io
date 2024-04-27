window.onload = function () {
    initParticles();
    setupImageToggle();
};

function initParticles() {
    Particles.init({
        selector: '.background',
        color: ['#d1d1e0', '#e0e0eb', '#f0f0f5', '#ffffff'],
        connectParticles: true,
    });
}

function setupImageToggle() {
    const img = document.getElementById('img-pfp');
    const infoElement = document.querySelector('.info');
    const bioElement = document.getElementById("bio");
    bioElement.innerHTML = getDefaultBio()
    let isToggled = false;

    img.addEventListener('click', function () {
        if (isToggled) {
            bioElement.innerHTML = getDefaultBio();
            infoElement.classList.remove('info-toggled');
        } else {
            bioElement.innerHTML = getToggledBio();
            infoElement.classList.add('info-toggled');
        }
        isToggled = !isToggled;
    });
}

function getToggledBio() {
    const { readableBirthYear, readableOutput } = calculateDates();
    return `Programmer & Gamer<br>✩<br>${readableBirthYear}<br>${readableOutput}`;
}

function getDefaultBio() {
    return `Python and JavaScript lover.<br><br>Fan of all things tech.<br>Advocate of Free and Open Source Software.`;
}

function calculateDates() {
    const birthDate = new Date("May 31, 2001");
    const marriedDate = new Date("June 26, 2023");
    const currentDate = new Date();

    const adjustBirthYear = currentDate.getMonth() <= birthDate.getMonth() && currentDate.getDate() < birthDate.getDate() ? 1 : 0;
    const adjustMarriedYear = currentDate.getMonth() <= marriedDate.getMonth() && currentDate.getDate() < marriedDate.getDate() ? 0 : 1;

    const marriedYearsSince = currentDate.getFullYear() - marriedDate.getFullYear() - adjustMarriedYear;
    const marriedMonths = 12 - (marriedDate.getMonth() - currentDate.getMonth() + 1);

    const readableBirthYear = `${currentDate.getFullYear() - birthDate.getFullYear() - adjustBirthYear} years old`;
    const readableOutput = `${marriedYearsSince ? `${marriedYearsSince} year${marriedYearsSince > 1 ? 's' : ''} and ` : ''}${marriedMonths} month${marriedMonths ? 's' : ''} married`;

    return { readableBirthYear, readableOutput };
}