function pageLoad() {
    const logo = document.createElement('div');
    logo.id = 'logo';
    logo.innerHTML = 'MEDI<br>TERRA<br>NEO';
    const content = document.getElementById('content');
    content.appendChild(logo);

    const nav = document.createElement('div');
    nav.id = 'nav';
    const home = document.createElement('div');
    home.id = 'home';
    home.classList.add('nav-item');
    home.textContent = 'HOME';
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.classList.add('nav-item');
    menu.textContent = 'MENU';
    const contact = document.createElement('div');
    contact.id = 'contact';
    contact.classList.add('nav-item');
    contact.textContent = 'CONTACT';

    const credit = document.createElement('div');
    credit.id = 'bg-image-credit';
    credit.innerHTML = 'Image by <a href="https://pixabay.com/users/lukasbieri-4664461/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2378729">Lukas Bieri</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2378729">Pixabay</a>'

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    content.appendChild(nav);
    document.body.appendChild(credit);
}

function resetContent() {
    const container = document.getElementById('content');
    container.removeChild(container.lastChild);
}

export {pageLoad, resetContent};
