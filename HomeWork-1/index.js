import colors from 'colors'


const color = colors;
// Получаем массив с данными
const argv = process.argv.slice(2);

// Пустой массив, в который мы будем ложить результат
let Arra = [];


// Приводит к типу NUmber полученыне значения
let number1 = Number(argv[0]);
let number2 = Number(argv[1]);

// Делаем проверку на  NAN.
if (isNaN(number1) || isNaN(number2)) {
	console.log(color.red('Введите корректное число'))
	// Если ввели тип даныых Number то проходим дальше
} else {
	// Тут сравним 2 переменые на большинство
	while (number1 < number2) {
		// Если  2 меньше 4 то запускаем функцию и передаем туда 2
		if (isPrimeNumber(number1)) {

		}
		// Как только выполнилась функция мы  увелим переменую 1
		number1++;
	}
	// Если 2 больше 4 то ошибка
	if (number1 > number2) {
		console.log(color.red('Нужно задать правильный диапазон значения. От меньшего к большему'))
	}

}

// Функция навывод простых чисел принимает число выше
function isPrimeNumber(number) {
	// Проверка если полученое число меньше 2 или отрицательно ( -10, -1) тогда полученному числу (number) присваиваем число 2
	// Выведение простых чисел начинается с 2
	if (number < 2) {
		return number = 2;
	}
	// Происходит итерация.
	for (let i = 2; i <= Math.sqrt(number); i++) {

		if (number % i === 0) {
			return false;
		}
	}
	// Плученные числа пушим в массив
	Arra.push(number);

}

if (Arra.length !== 0) {
	// ЗАпуск функции с переданым массивом
	iterateArray(Arra)
} else console.log(color.red('простых чисел в диапазоне нет'))



function iterateArray(ar) {

	// итерируем массив
	for (let r = 0; r < ar.length; r++) {
		// Старт 0 и до переданного числа
		if ((r) % 3 == 0) {
			console.log(color.red(ar[r]))
		}
		// Добавили 2. Теперь стартуем от 2
		if ((r + 2) % 3 == 0) {
			console.log(color.yellow(ar[r]))
		}
		// Старт от 4.  У нас остаток от деления зависит от индекса передавемого нам от перебора массива по длине. Мы меняем индекс в массиве и выводим числа которые нам надо.
		if ((r + 4) % 3 == 0) {
			console.log(color.blue(ar[r]))
		}
	}

}

