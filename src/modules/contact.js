export {loadContact}

function loadContact() {
    const page = document.createElement('div');
    page.id = 'about-us';

    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');

    item1.textContent = 'Адрес: Ул.Оборище 9Б';
    item2.textContent = 'Телефон: 0886 644 402';
    item3.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1077.4580779506352!2d23.33662159601459!3d42.69549557271639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8577aa88fe0d%3A0x1c772205079f2465!2z0JzQtdC00LjRgtC10YDQsNC90LXQvg!5e0!3m2!1sbg!2sbg!4v1673807907094!5m2!1sbg!2sbg" width="400px" height="450" style="border:0;" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    page.appendChild(item1);
    page.appendChild(item2);
    page.appendChild(item3);
    document.getElementById('content').appendChild(page);
}