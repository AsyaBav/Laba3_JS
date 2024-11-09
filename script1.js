function subtractAndShowOpposite() {
    const number1 = prompt('Введите первое число:');   // Пример первого числа
    const number2 = prompt('Введите второе число:');    // Пример второго числа

    const subtractionResult = number1 - number2;
    const oppositeResult = -subtractionResult;

    alert(`Результат вычитания: ${subtractionResult}`);
    alert(`Число, противоположное результату: ${oppositeResult}`);
}