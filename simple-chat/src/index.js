import './index.css';
import * as chats from './chats.js'

// НАЧАЛО КОДА JS ДЛЯ СТРАНИЦЫ С СООБЩЕНИЯМИ ЧАТА (ДЛЯ МАКЕТА ИЗ ДЗ-2) 

// Раскрыть меню доп. информации в блоке .more
document.querySelector(".dropbtn").addEventListener("click", function (event) {
    document.getElementById("myDropdown").classList.toggle("show");
});

// Закрыть меню доп. информации в блоке .more при нажатии вне блока .more
window.addEventListener('click', function(event) {
    if (!event.target.matches('#more_vert')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            openDropdown.classList.remove('show');
        }
    }
})

// Автоматический скролл вниз при отправке нового сообщения
function scroll() {
    document.querySelector('.message').scrollTop = document.querySelector('.message').scrollHeight;
}

// Модель информации о сообщении для сохранения в LocaleStorage
class InfoMessage {
    constructor(message, author, dateTime){
        this.message = message;     // сообщение   
        this.author = author;       // автор
        this.dateTime = dateTime;   // время отправки
    }
}

const form = document.querySelector('form'); 
const input = document.querySelector('.form-input');
const message = document.querySelector('.message');
const back = document.querySelector('.back');

const messageStoreKey = 'message_store_key';
let infoMessages = getInfoMessagesFromLocStore();

refresh(); 

form.addEventListener('submit', handleSubmit.bind(this));
// form.addEventListener('keypress', this.handleKeyPress.bind(this));

// отправить сообщение
function handleSubmit (event) {
    event.preventDefault();
    if (input.value.trim() === '') {
        input.value = '';
        return;
    }

    const info = new InfoMessage(input.value, 'ilshat', new Date());
    createBlockMessage(info);
    scroll();
    setInfoMessagesToLocStore(info);
    input.value = '';
}

// получить сообщения из LocaleStorage
function getInfoMessagesFromLocStore() {
    const infoMessagesFromLocalStore = localStorage.getItem(messageStoreKey);
    return JSON.parse(infoMessagesFromLocalStore);
}

// сохранить информацию о сообщении в LocaleStorage
function setInfoMessagesToLocStore(info) {
    infoMessages.push(info);
    localStorage.setItem(messageStoreKey,JSON.stringify(infoMessages));
}

// создать блок сообщения
function createBlockMessage(info) {
    let container = document.createElement('div'); 
    container.className = 'message-container';

    let message_text = document.createElement('div')
    message_text.className = 'message-text';
    message_text.innerHTML = info.message;

    let message_time = document.createElement('div');
    message_time.className = 'message-time';
    let dateTime = new Date(info.dateTime);
    let res = [dateTime.getHours(), dateTime.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
    }).join(":");
    message_time.innerHTML = '<p>' + res + '</p>';
    
    let message_status = document.createElement('span'); 
    message_status.className = 'material-icons';
    message_status.innerHTML = 'done_all'

    message_time.appendChild(message_status);
    container.appendChild(message_text);
    container.appendChild(message_time);
    message.appendChild(container);
}

// получить сообщения при обновлении
function refresh() {          
    
    if (!infoMessages) {
        infoMessages = new Array();
        return;
    }
    infoMessages.forEach(x => {
        createBlockMessage(x);
    });
}

// перейти на страницу с чатами, а также загрузить, распарсить и отправить информацию о 
// последнем сообщении из LocalStorage в блок с чатом (у меня блок один, с Дженнифер )
back.addEventListener('click', function (event) {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'flex';

    const lastMessage = chats.getLastMessageFromLocStore();
    
    if (lastMessage) {
        let lastTime = chats.parseTime(new Date(lastMessage['dateTime']));
        let lastText = lastMessage['message'];
        chats.textBlock.innerHTML = lastText;
        chats.timeBlock.innerHTML = lastTime;
        chats.conditionBlock.innerHTML = '<span class="material-icons">done_all</span>';
    }
});

// событие нажатия клавиши Enter
function handleKeyPress (event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
        console.log('kyepresss')
    }
}

