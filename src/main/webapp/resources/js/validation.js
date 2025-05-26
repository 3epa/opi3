function validateX(x) {
    if (x === undefined) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "inline";
        errorElement.textContent = "Ошибка: x не введён";
        return false;
    } else if (!isNumeric(x)) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "inline";
        errorElement.textContent = "Ошибка: x не число";
        return false;
    } else if (!([-3.0, -2.0, -1.0, 0, 1.0, 2.0, 3.0].includes(x))) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "inline";
        errorElement.textContent = "Ошибка: x не подходит под нужный диапазон";
        return false;
    } else {
        return true;
    }
};

function validateY(y) {
    console.log(y);
    if (y === undefined) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "inline";
        errorElement.textContent = "Ошибка: y не введён";
        return false;
    } else if (!isNumeric(y)) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "inline";
        errorElement.textContent = "Ошибка: y не число";
        return false;
    } else if (!((y>=-3) && (y<=3))) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "inline";
        errorElement.textContent = "Ошибка: y не подходит под нужный диапазон";
        return false;
    } else {
        return true;
    }
}

function validateR() {
    r = parseFloat(getSelectedRadioValue());
    console.log(r);
    if (r === undefined) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "inline";
        errorElement.textContent = "Ошибка: r не введён";
        return false;
    } else if (!isNumeric(r)) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "inline";
        errorElement.textContent = "Ошибка: r не число";
        return false;
    } else if (!([1, 1.5, 2.0, 2.5, 3].includes(r))) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "inline";
        errorElement.textContent = "Ошибка: r не подходит под нужный диапазон";
        return false;
    } else {
        return true;
    }
}

function getSelectedRadioValue() {
    const radios = document.querySelectorAll(`input[name="myForm\\:r"]`);
    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}