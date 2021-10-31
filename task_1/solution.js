function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    let message = productName;
    message = message + " " + "за" + " " + productPrice + " " + "теперь в корзине!";
    console.log(message);

    // Задание №1.1. Оповещение о добавлении в корзину

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;
    let newValue = oldValue;
    newValue = newValue + 1;

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    let newSum = oldSum + difference;
    let newSumText = `${newSum} ₽`;

    // Задание №1.3. Увеличение суммы в корзине

    return newSumText;
}

