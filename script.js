const display = document.getElementById('display');

/**
 * Añade caracteres a la pantalla
 * @param {string} value - El número o símbolo presionado
 */

function append(value) {
    if (value === '.' && display.value.split(/[\+\-\*\/]/).pop().includes('.')) {
        return;
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        if (display.value.trim() === "") return;
        
        const result = eval(display.value);

        display.value = Number.isFinite(result) ? result : "Error";
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9\+\-\/\*\.]/.test(key)) {
        append(key);
    } 
    else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } 
    else if (key === 'Escape' || key === 'Delete') {
        clearDisplay();
    } 
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});