// 1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
console.log("-------------1------------");

function minNum(a, b) {
  return a < b ? a : b;
}
console.log(`Минимальное число: ${minNum(10, 9)}`);

console.log("-------------2------------");

// 2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

function printEvNb(a, b) {
  // определяем максимальное
  let max = (a > b) ? a : b;
  let min = (a < b) ? a : b;

  // перебираем числа от макс до мин
  for (let index = max; index >= min; index--) {
    // если число четное, выводим его в консоль
    if (index % 2 === 0) {
      console.log(index);
    }
  }
}
printEvNb(2, 10);

console.log("------------3-------------");

// 3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function pow(a, b = 2) {
  return a ** b;
}

console.log(pow(3)); // со значением по умолчанию (2)
console.log(pow(2, 4)); // стандартная проверка
console.log(pow(64, 0.5)); // извлекаем квадратный корень

console.log("------------4-------------");

// 4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sumNum(n) {
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index;
  }
  return console.log(`Сумма чисел от 1 до ${n} = ${sum}`); // проверка;
}

sumNum(15);

console.log("------------5-------------");

// 5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function sumEvOddNum(n, m) {
  let sumEven = 0;
  let sumOdd = 0;
  let sum = 0;

  for (let index = n; index <= m; index++) {
    sum += index;
    (index % 2 === 0) ? sumEven += index : sumOdd += index;
  }
  console.log(`Сумма четных чисел = ${sumEven}`);
  console.log(`Сумма нечетных чисел= ${sumOdd}`);
  console.log(`Сумма чисел от ${n} до ${m} = ${sum}`);
}
sumEvOddNum(0, 20);

console.log("--------------------------");
