


import EventEmitter from "events";
import Colors from "colors";
import { argv } from "process";

class TimerEmmiter extends EventEmitter { }
const emitter = new TimerEmmiter()


// Создаем емитр который мы найдем по значению ('Start') и передадим в него нагрузку
emitter.on('Start', ([createdDate, setIn]) => {

	// Генерируем новую дату (дата в данный момент)
	const dateNow = new Date();
	// Если сейчас дата меньше чем мы ввели то вызовем эмитр "End"
	if (dateNow > createdDate) {
		emitter.emit('End', setIn)
	} else {
		// Если все впорядке то вызовем функцию которая отобразит нам наше время
		const value = (createdDate - dateNow) / 1000
		console.log(getTime(value))
	}
})

// вызов эмитера который прекратит вызов setInterval
emitter.on('End', (setIn) => {
	clearInterval(setIn);
	console.log('Время Вышло')
})

// Это я скопировал. Долго мулчася но не сделал.
const getTime = (time) => {
	const arr = [
		Math.floor(time % 60),
		Math.floor((time / 60) % 60),
		Math.floor((time / (60 * 60)) % 24),
		Math.floor(time / (60 * 60 * 24)),
	]

	return `${arr.pop()} days ${arr.pop()} hours ${arr.pop()} minutes ${arr.pop()} seconds`;
}

// Старт нашего ТАймера. С интервалом 1секундой
const startTaimer = (createdDate) => {
	let setIn = setInterval(() => {
		emitter.emit('Start', [createdDate, setIn])
	}, 1000)
}

// Принимаем наши значения
const value = argv.slice(2);
console.log(value)

let hour = value[0];
let day = value[1];
let month = value[2];
let year = value[3];

// Записываем их в дату от которой нужно вести отсчет
const createdDate = new Date(year, month - 1, day, hour);
console.log(createdDate)

// Проверка на некоректный ввод
if (isNaN(createdDate)) {
	console.log(Colors.red('Введите корректное число. "Час" "День" "Месяц" "Год" / 13 25 03 2023'))
} else startTaimer(createdDate)









