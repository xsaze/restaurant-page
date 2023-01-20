import horse_steak from '../images/bbq/horse-steak.jpg';
import meatballs from '../images/bbq/meatballs.jpg';
import ribeye from '../images/bbq/ribeye.jpg';
import veal from '../images/bbq/veal-steak.jpg';
import gyros from '../images/chefs/gyros.jpg';
import sword from '../images/chefs/sword-fish.jpg';
import wagyu from '../images/chefs/wagyu.jpg';
import tagliatelle from '../images/pasta/Tagliatelle.jpg';
import celina from '../images/pasta/Celina.jpg';
import kritaryaki from '../images/pasta/kritaryaki.jpg';
import provance from '../images/provance.jpg';
function loadMenu() {
    
    const menu_data = [
        {
            title : "Стек от конско бон филе",
            desc : "Стек от конско бон филе със селски картофи",
            img : `${horse_steak}`,
            price : "22.80лв",
            category : "bbq"
        },
        {
            title : "Пикантни телешки кюфтета",
            desc : "Кюфтета от телешко месо от порода Шароле с пеперончини, пармезан и черен пипер",
            img : `${meatballs}`,
            price : "16.70лв",
            category : "bbq"
        },
        {
            title : "Рибай стек",
            desc : "Рибай стек с гарнитура по избор /цената е за 100гр/",
            img : `${ribeye}`,
            price : "21.90лв",
            category : "bbq"
        },
        {
            title : "Бон филе Шароле",
            desc : "Телешко бон филе от порода шароле със сотирани манатарки и тиквички поляти с телешки сос от трюфел",
            img : `${veal}`,
            price : "43.60лв",
            category : "bbq"
        },
        {
            title : "Авторски гирос",
            desc : "Пълнозърнеста питка със свинско месо от порода Иберико, конфи от червен лук, домати и три вида сосове",
            img : `${gyros}`,
            price : "19.20лв",
            category : "chefs"
        },
        {
            title : "Филе от прясна риба меч",
            desc : "Филе от прясна риба меч и ризони с трюфел и гъби",
            img : `${sword}`,
            price : "33.60лв",
            category : "chefs"
        },
        {
            title : "Бургер Wagyu",
            desc : "Бургер от Wagyu с овесена питка, пъдпъдъчи яйца и трюфел",
            img : `${wagyu}`,
            price : "25.70лв",
            category : "chefs"
        },
        {
            title : "Талятели с манатарки",
            desc : "Талятели с манатарки и пресен трюфел",
            img : `${tagliatelle}`,
            price : "16.90лв",
            category : "pasta"
        },
        {
            title : "Ризото от целина",
            desc : "Ризото от целина с пресни аспержи, лилав морков и пармезан",
            img : `${celina}`,
            price : "16.90лв",
            category : "pasta"
        },
        {
            title : "Критараки с калмари и рагу от октопод",
            desc : "Критараки с калмари и рагу от октопод, червени и зелени чушки и доматена салца",
            img : `${kritaryaki}`,
            price : "18.90лв",
            category : "pasta"
        },
        {
            title : "Провансалски десерт",
            desc : "Провансалски десерт с йогурт, бадемов марципан, белгийски шоколад и сушени боровинки",
            img : `${provance}`,
            price : "9.90лв",
            category : "dessert"
        },
    ]

    

    const menu = document.createElement('div');
    menu.id = 'menu';

    const chefs = document.createElement('div');
    chefs.classList.add('menu-category');
    chefs.textContent = 'Авторски предложения';
    

    const bbq = document.createElement('div');
    bbq.classList.add('menu-category');
    bbq.textContent = 'Барбекю';

    const pasta = document.createElement('div');
    pasta.classList.add('menu-category');
    pasta.textContent = 'Паста и ризото';

    const dessert = document.createElement('div');
    dessert.classList.add('menu-category');
    dessert.textContent = 'Десерти';

    menu_data.forEach((element, i) => {
        const item_card = document.createElement('div');
        item_card.classList.add("menu-card");
        
        const item = `
        <div class="menu-text">
        <div class="item-title">${menu_data[i].title}</div>
        <div class="item-desc">${menu_data[i].desc}</div>
        <div class="item-price">${menu_data[i].price}</div>
        </div>
        <img class="menu-img" src=${menu_data[i].img}>
        `
        item_card.innerHTML += item;
        if (menu_data[i].category == "bbq") {
            bbq.appendChild(item_card);
        }
        if (menu_data[i].category == "chefs") {
            chefs.appendChild(item_card);
        }
        if (menu_data[i].category == "pasta") {
            pasta.appendChild(item_card);
        }
        if (menu_data[i].category == "dessert") {
            dessert.appendChild(item_card);
        }
    })


    menu.appendChild(chefs);
    menu.appendChild(bbq);
    menu.appendChild(pasta);
    menu.appendChild(dessert);
    document.getElementById('content').appendChild(menu);

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.getElementById('menu').appendChild(lightbox);

    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.classList.add('fullsize')
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        },{passive:true})
    })

    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return
        lightbox.classList.remove('active');
    }, {passive: true})

}

export {loadMenu};