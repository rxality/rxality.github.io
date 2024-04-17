window.onload = function () {
    Particles.
        init
        ({
            selector:
                '.background',
            color: ['#d1d1e0', '#e0e0eb', '#f0f0f5', '#ffffff'],
            connectParticles: true,
        });

    const birthDate = new Date("May 31, 2001");
    const marriedDate = new Date("June 26 2023");
    const currentDate = new Date();
    let adjustBirthYear = 0;
    let adjustMarriedYear = 0;
    let marriedMonths = 12 - ((marriedDate.getMonth() - currentDate.getMonth()) + 1);

    if ((currentDate.getMonth() <= birthDate.getMonth()) || (currentDate.getDate() <= birthDate.getDate())) {
        adjustBirthYear++;
    }

    if ((currentDate.getMonth() <= marriedDate.getMonth()) || (currentDate.getDate() <= marriedDate.getDate())) {
        adjustMarriedYear++;
    }

    let marriedYearsSince = (currentDate.getFullYear() - marriedDate.getFullYear()) - adjustMarriedYear;
    let readableBirthYear = `${(currentDate.getFullYear() - birthDate.getFullYear()) - adjustBirthYear} years old`;
    let readableOutput = `${marriedYearsSince ? `${marriedYearsSince} year${marriedYearsSince > 1 ? 's' : ''} and ` : ''}${marriedMonths} month${marriedMonths ? 's' : ''} married`;

    document.getElementById("time-since").innerHTML = readableBirthYear + "<br>" + readableOutput;
};