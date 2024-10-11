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
    "/help/help.html",
    "/projects/projects.html",
    "/report/report.html",
    "/error/error.html",
    "/guides/guides.html"
];

// Целевая страница для переадресации
var newPageURL = "/m/screensizeerror/screensizeerror.html";

// Получаем текущий путь страницы (без домена)
var currentPath = window.location.pathname;

// Проверяем, находится ли текущий путь в списке путей для переадресации
if (redirectPaths.includes(currentPath) && isMobileDevice()) {
    window.location.href = newPageURL; // Выполняем мгновенную переадресацию для мобильных устройств
}

//ПЕРЕАДРЕСАЦИЯ С МОБ ОШИБКИ НА ПК ВЕРСИЮ САЙТА

// Функция для проверки, является ли устройство мобильным
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

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

//ПЕРЕАДРЕСАЦИЯ С МОБ САЙТА НА ПК ВЕРСИЮ САЙТА

// Функция для проверки, является ли устройство мобильным
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Указываем страницу, с которой будет происходить переадресация
var currentPagePath = "/m/main/main.html";

// Целевая страница для переадресации
var newPageURL = "/main/main.html";

// Получаем текущий путь страницы (без домена)
var currentPath = window.location.pathname;

// Проверяем, является ли устройство настольным и совпадает ли текущий путь
if (!isMobileDevice() && currentPath === currentPagePath) {
    window.location.href = newPageURL; // Выполняем переадресацию
}

//ПЕРЕАДРЕСАЦИЯ С ПК НА МОБ ВЕРСИЮ

// Функция для проверки, является ли устройство мобильным
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Указываем страницу, с которой будет происходить переадресация
var currentPagePath = "/main/main.html";

// Целевая страница для переадресации
var newPageURL = "/m/main/main.html";

// Получаем текущий путь страницы (без домена)
var currentPath = window.location.pathname;

// Проверяем, является ли устройство настольным и совпадает ли текущий путь
if (isMobileDevice() && currentPath === currentPagePath) {
    window.location.href = newPageURL; // Выполняем переадресацию
}

//ПЕРЕАДРЕСАЦИЯ С МОБ САЙТА НА ПК ВЕРСИЮ САЙТА

// Функция для проверки, является ли устройство мобильным
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Указываем страницу, с которой будет происходить переадресация
var currentPagePath = "/FaQ/faq.html";

// Целевая страница для переадресации
var newPageURL = "/m/screensizeerror/screensizeerror.html";

// Получаем текущий путь страницы (без домена)
var currentPath = window.location.pathname;

// Проверяем, является ли устройство настольным и совпадает ли текущий путь
if (isMobileDevice() && currentPath === currentPagePath) {
    window.location.href = newPageURL; // Выполняем переадресацию
}

function toggleExpand(questionId, answerId) {
    // Найдем все вопросы и ответы
    var questions = document.querySelectorAll('.question');
    var answers = document.querySelectorAll('.a1');

    // Получим текущий вопрос и ответ
    var currentQuestion = document.getElementById(questionId);
    var currentAnswer = document.getElementById(answerId);

    // Проверим, активен ли уже текущий блок
    var isActive = currentQuestion.classList.contains('active');

    // Сначала свернем все вопросы и ответы
    questions.forEach(function (question) {
        question.classList.remove('active');
    });

    answers.forEach(function (answer) {
        answer.classList.remove('active');
    });

    // Если текущий блок не был активен, откроем его
    if (!isActive) {
        currentQuestion.classList.add('active');
        currentAnswer.classList.add('active');
    }
}