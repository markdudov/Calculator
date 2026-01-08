const display = document.getElementById('display');

// Добавяне на символ към дисплея
function appendToDisplay(input) {
    display.value += input;
}

// Изчистване на целия дисплей
function clearDisplay() {
    display.value = "";
}

// Изтриване на последния символ
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Пресмятане на резултата
function calculate() {
    try {
        // eval() изчислява математическия низ (string)
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Грешка";
    }
}