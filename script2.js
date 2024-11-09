function calculateCost() {
    const number1 = prompt('Введите полную стоимость:');
    // Пример первого числа
    const number2 = prompt('Введите ставку налога:');    // Пример второго числа

    const costResult = number1 - (number1 * number2);

    alert(`Стоимость составляет: ${costResult}`);
}