export function scroll(selectorName) {
    document.querySelector(`.${selectorName}`).scrollTop = document.querySelector(`.${selectorName}`).scrollHeight;
}