import readline from 'readline';
import fs from 'fs';


// Поток для чтения файла создается при помощи функции 
const readStream = fs.createReadStream('./access_tmp.log', 'utf-8');

// Создали два айпи которые нужно будет натйи
const ip1 = '89.123.1.41';
const ip2 = '34.48.240.111';

// Создадим файлы в которые будем записывать
const writeStream1 = fs.createWriteStream(`${ip1}`);
const writeStream2 = fs.createWriteStream(`${ip2}`);



const rl = readline.createInterface({
	input: readStream
})

rl.on('line', (line) => {
	if (line.includes(ip1)) {
		writeStream1.write(line + '\n');
	}
	if (line.includes(ip2)) {
		writeStream2.write(line + '\n')
	}

})


