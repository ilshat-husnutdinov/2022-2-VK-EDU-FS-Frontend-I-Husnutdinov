import './chats.css';

// НАЧАЛО КОДА JS ДЛЯ СТРАНИЦЫ С ЧАТАМИ (ДЛЯ МАКЕТА ИЗ ДЗ-3) 
const messageStoreKey = 'message_store_key';
const chat = document.querySelector('.chat');
export const textBlock = document.querySelector('.text');
export const timeBlock = document.querySelector('.time');
export const conditionBlock = document.querySelector('.condition');

/* Делает переход на чат с сообщениями */
chat.addEventListener('click', function (event) {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page1').style.display = 'flex';
});


// получить последнее сообщение из LocaleStorage
export function getLastMessageFromLocStore() {
    const infoMessagesFromLocalStore = localStorage.getItem(messageStoreKey);
    const parseMessagesInfo = JSON.parse(infoMessagesFromLocalStore);
    if (parseMessagesInfo!==null && Array.isArray(parseMessagesInfo)){
        return parseMessagesInfo[parseMessagesInfo.length - 1];
    } 
    return null;
}

// парсит время на часы и минут HH:MM
export function parseTime(dateTime) {
    return [dateTime.getHours(), dateTime.getMinutes()].map(function (x) {
                return x < 10 ? "0" + x : x
            }).join(":");
}

// КОНЕЦ КОДА JS ДЛЯ СТРАНИЦЫ С ЧАТАМИ (ДЛЯ МАКЕТА ИЗ ДЗ-3) 