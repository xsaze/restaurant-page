import umberto from '../images/baba.jfif'

function loadHome() {
    const about = document.createElement('div');
    about.id = 'about-us';

    const title = document.createElement('div');
    title.id = 'about-us-title';
    title.textContent = 'Ресторант Mediterraneo';

    const text1 = document.createElement('div');
    text1.classList.add('about-us-text');
    text1.textContent = 'Класическа средиземноморска кухня, приготвена и поднесена в домашен стил и уютна обстановка, допълнена от гостоприемството и темперамента на Умберто Росети.';

    const image = document.createElement('div');
    image.id = 'umberto'
    image.innerHTML = `<img src=${umberto} width=480px>`

    const text2 = document.createElement('div');
    text2.classList.add('about-us-text');
    text2.textContent = 'Повече от 15 години вярваме, че творчеството да се създава хубава храна е много важна част от изкуството на живота и сме истински щастливи когато нашите ястия са в центъра на споделената емоция от една вечеря с приятели.'

    about.appendChild(title);
    about.appendChild(text1);
    about.appendChild(image);
    about.appendChild(text2);
    document.getElementById('content').appendChild(about);
}

export {loadHome};
