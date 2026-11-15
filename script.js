// Цэсний холбоосууд дээр дархад ажиллах интерактив функц
document.addEventListener('DOMContentLoaded', () => {
    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navContact = document.getElementById('nav-contact');

    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Та одоогоор Нүүр хуудсан дээр байна.');
    });

    navAbout.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Миний тухай хэсэг рүү шилжих...');
    });

    navContact.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Холбоо барих хэсэг рүү шилжих...');
    });
});