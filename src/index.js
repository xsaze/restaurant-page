import {pageLoad, resetContent} from './modules/page-load.js';
import {loadHome} from './modules/home.js';
import {loadContact} from './modules/contact.js';
import {loadMenu} from './modules/menu.js';
import _ from 'lodash';
import './style.css';
import './reset.css';


pageLoad();
loadHome();

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

homeBtn.addEventListener('click', function(){
    resetContent();
    loadHome();
})

contactBtn.addEventListener('click', function(){
    resetContent();
    loadContact();
})

menuBtn.addEventListener('click', function(){
    resetContent();
    loadMenu();
})