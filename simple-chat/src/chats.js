import './chats.css';

const messageStoreKey = 'message_store_key';
const chat = document.querySelector('.chat');
const textBlock = document.querySelector('.text');
const timeBlock = document.querySelector('.time');
const conditionBlock = document.querySelector('.condition');

const lastMessage = getLastMessageFromLocStore();
if (lastMessage) {
    let lastTime = parseTime(new Date(lastMessage['dateTime']));
    let lastText = lastMessage['message'];
    textBlock.innerHTML = lastText;
    timeBlock.innerHTML = lastTime;
    conditionBlock.innerHTML = '<span class="material-icons">done_all</span>';
}

/* Делает переход на чат с сообщениями */
chat.addEventListener('click', function (event) {
    document.location.href = 'index.html'
});


// получить последнее сообщение из LocaleStorage
function getLastMessageFromLocStore() {
    const infoMessagesFromLocalStore = localStorage.getItem(messageStoreKey);
    const parseMessagesInfo = JSON.parse(infoMessagesFromLocalStore);
    if (parseMessagesInfo!==null && Array.isArray(parseMessagesInfo)){
        return parseMessagesInfo[parseMessagesInfo.length - 1];
    } 
    return null;
}

// парсит время на часы и минут HH:MM
function parseTime(dateTime) {
    return [dateTime.getHours(), dateTime.getMinutes()].map(function (x) {
                return x < 10 ? "0" + x : x
            }).join(":");
}


