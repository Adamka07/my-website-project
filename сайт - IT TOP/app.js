function sumOfDigits(number) {
  // Преобразуем число в строку, чтобы было легче итерировать по цифрам
  const numStr = String(number);
  let sum = 0;

  // Проходимся по каждой цифре в строке
  for (let i = 0; i < numStr.length; i++) {
     // Преобразуем цифру обратно в число и добавляем к сумме
    sum += parseInt(numStr[i]);
  }
    // Возвращаем результат
  return sum;
}

console.log(sumOfDigits(123));  // Выведет: 6 (1 + 2 + 3)
console.log(sumOfDigits(4567)); // Выведет: 22 (4 + 5 + 6 + 7)
console.log(sumOfDigits(9));    // Выведет: 9
console.log(sumOfDigits(0));    // Выведет: 0
console.log(sumOfDigits(999));  // Выведет: 27


  