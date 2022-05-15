// 1)
a = 5, b = 1, c = 5, d = 0;
// 2)
e = 5, f = 4, x = 6, y = 5;
// 3)
let englishFootballChampion = prompt('Чемпион Англии по футболу', 'год');
if (englishFootballChampion < 2011) {
    console.log('Статистика еще не велась');
} else if (englishFootballChampion == 2022) {
    console.log('Сезон еще идет');
} else if (englishFootballChampion > 2022) {
    console.log('Все лучшее впереди');
} else if (englishFootballChampion == 2015 || englishFootballChampion == 2017) {
    console.log('Челси');
} else if (englishFootballChampion == 2012 || englishFootballChampion == 2014 || englishFootballChampion == 2018 || englishFootballChampion == 2019 || englishFootballChampion == 2021) {
    console.log('Манчестер Сити');
} else if (englishFootballChampion == 2011 || englishFootballChampion == 2013) {
    console.log('Манчестер Юнайтед');
} else if (englishFootballChampion == 2020) {
    console.log('Ливерпуль');
} else(englishFootballChampion == 2016) {
    console.log('Лестер Сити');
}


let englishFootballChampion = prompt('Чемпион Англии по футболу', 'год');
let result = englishFootballChampion < 2011 ? 'Статистика еще не велась' : englishFootballChampion == 2022 ? 'Сезон еще идет' : englishFootballChampion > 2022 ? 'Все лучшее впереди' : englishFootballChampion == 2015 || englishFootballChampion == 2017 ? 'Челси' : englishFootballChampion = 2012 || englishFootballChampion == 2014 || englishFootballChampion == 2018 || englishFootballChampion == 2019 || englishFootballChampion == 2021 ? 'Манчестер Сити' : englishFootballChampion == 2011 || englishFootballChampion == 2013 ? 'Манчестер Юнайтед' : englishFootballChampion == 2020 ? 'Ливерпуль' : englishFootballChampion == 2016 ? 'Лестер Сити' : 'Неизвестно';
console.log(result);

// 4)
let login = prompt('Введите логин', 'Логин');
if (login === 'Админ') {
    let password = prompt('Введите пароль', 'Пароль')
    if (password === 'Я главный') {
        alert('Здравствуйте!');
    } else if (password === '' || password === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login === '' || login === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}
// 5)
for (let i = 7; i < 16; i++) {

    if (i % 2 == 0) continue;

    console.log(i);
}
// 6)
let j = 0;
while (j < 5) {
    console.log(`number ${j}!`)
    j++;
}