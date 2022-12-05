function getTimeFromMinutes(totalMinutes) {
    if (typeof(totalMinutes) != 'number' || totalMinutes < 0 || !Number.isInteger(totalMinutes) ) {
        return "Ошибка, проверьте данные";
    } 
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    let hoursString = '';
    switch (hours) {
        case 0:
            hoursString = 'hours';
            break;
        case 1:
            hoursString = 'hour';
            break;
        default:
            hoursString = 'hours';
    }
    return `Это ${hours} ${hoursString} и ${minutes} минут`;
}

function findMaxNumber(a, b, c, d) {
    const array = [a, b, c, d];
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number' || array.length < 4) {
        return 0;
    }
    let maxNumber = Math.max(...array);
    return maxNumber;
}
console.log(findMaxNumber(1, 5, 6.6, 11));


const fib = (num) => {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }
    let result = '';
    let first = 0;
    let second = 1;
    for (let i = 0; i < num; i++) {
        if (i + 1 === num ) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }
    return result;
};
console.log(fib(4));
console.log(fib(7));

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
}
    
    // Не трогаем
    return arrayOfNumbers;
}

console.log(fifthTask());


function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number' ) {
            data[i] = data[i] * 2;
        } else {
            data[i] +=  " - done";
        }
    }
    // Пишем решение вот тут
    console.log(data);
    // Не трогаем
    return data;
}
secondTask();

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i = 0; i < data.length; i++) {
        result.unshift(data[i]);
    }
    // Пишем решение вот тут
    
    console.log(result);
    // Не трогаем
    return result;
}
thirdTask();

function getMathResult(num, count) {
    let result = '';
    if (typeof(count) !== 'number' ||  count <= 0) {
        return num;
    } 
    for (let i = 1; i <= count; i++) {
        if (i === count) {
            result += `${num * i}`;
        } else {
            result += `${num * i}---`;
        }
    }
    console.log(result);
    return result;
}
getMathResult(5, 3);













