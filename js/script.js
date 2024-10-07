//ОТКЛЮЧЕНИЕ КОПИРОВАНИЯ ТЕКСТА

function nocopy(event) { 
    var event = event || window.event; 
    if (event.preventDefault) { event.preventDefault(); } 
    else { event.returnValue = false; } 
    return false; 
} 

document.onmouseup = nocopy; 
document.onmousemove = nocopy; 
document.ondragstart = nocopy; 
document.onselectstart = nocopy; 
document.ontextmenu = nocopy; 
document.oncopy = nocopy;

//ПЕРЕАДРЕСАЦИЯ НА ОШИБКУ С НЕРАБОЧИХ ССЫЛОК

// Массив путей страниц для переадресации
var redirectPaths = [
    "/FaQ/faq.html",
    "/help/help.html",
    "/projects/projects.html",
    "/report/report.html",
    "/guides/guides.html"
];

// Целевая страница для переадресации
var newPageURL = "/error/error.html";

// Получаем текущий путь страницы (без домена)
var currentPath = window.location.pathname;

// Проверяем, находится ли текущий путь в списке путей для переадресации
if (redirectPaths.includes(currentPath)) {
    window.location.href = newPageURL; // Выполняем мгновенную переадресацию
}

//ПЕРЕАДРЕСАЦИЯ С ПК ВЕРСИИ НА МОБ ОШИБКУ

 // Функция для проверки, является ли устройство мобильным
 function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Массив путей страниц для переадресации
var redirectPaths = [
    "/FaQ/faq.html",
    "/help/help.html",
    "/projects/projects.html",
    "/report/report.html",
    "/error/error.html",
    "/guides/guides.html",
    "/main/main.html"
];

// Целевая страница для переадресации
var newPageURL = "/m/screensizeerror/screensizeerror.html";

// Получаем текущий путь страницы (без домена)
var currentPath = window.location.pathname;

// Проверяем, находится ли текущий путь в списке путей для переадресации
if (redirectPaths.includes(currentPath) && isMobileDevice()) {
    window.location.href = newPageURL; // Выполняем мгновенную переадресацию для мобильных устройств
}

// Функция для проверки, является ли устройство мобильным
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

//ПЕРЕАДРЕСАЦИЯ С МОБ ОШИБКИ НА ПК ВЕРСИЮ САЙТА

// Указываем страницу, с которой будет происходить переадресация
var currentPagePath = "/m/screensizeerror/screensizeerror.html";

// Целевая страница для переадресации
var newPageURL = "/main/main.html";

// Получаем текущий путь страницы (без домена)
var currentPath = window.location.pathname;

// Проверяем, является ли устройство настольным и совпадает ли текущий путь
if (!isMobileDevice() && currentPath === currentPagePath) {
    window.location.href = newPageURL; // Выполняем переадресацию
}

