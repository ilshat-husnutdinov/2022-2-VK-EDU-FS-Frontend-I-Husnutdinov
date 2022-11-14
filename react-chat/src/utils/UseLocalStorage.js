// получить сообщения из LocaleStorage
export function getInfoMessagesFromLocStore() {
    const infoMessagesFromLocalStore = localStorage.getItem('messageStoreKey');
    return JSON.parse(infoMessagesFromLocalStore);
}

// отправить сообщения в LocaleStorage
export function setInfoMessagesToLocStore(data, info) {
    data.push(info);
    localStorage.setItem('messageStoreKey',JSON.stringify(data));
}


// получить последнее сообщение из LocaleStorage
export function getLastMessageFromLocStore() {
    const infoMessagesFromLocalStore = localStorage.getItem('messageStoreKey');
    const parseMessagesInfo = JSON.parse(infoMessagesFromLocalStore);
    if (parseMessagesInfo!==null && Array.isArray(parseMessagesInfo)){
        return parseMessagesInfo[parseMessagesInfo.length - 1];
    }
    return null;
}