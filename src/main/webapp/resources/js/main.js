window.onload = function() {
    let r = getSelectedRadioValue();
    if (r === null) {
        r = 0;
    }
    drawGraph(r);
    drawPoints();
}

//document.getElementById("r").addEventListener('input', function() {
//    if (validateR()) {
//        const r = document.getElementById("r").value;
//        drawGraph(r);
//        const errorElement = document.querySelector("#error");
//        errorElement.style.display = "none";
//        errorElement.textContent = "";
//    } else {
//        drawGraph(0);
//    }
//    drawPoints();
//});
//

function drawPoints() {
    const rows = document.querySelectorAll("#result tbody tr");
    const rect = graph.getBoundingClientRect();
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");

        const x = +cells[0].innerText;
        const y = +cells[1].innerText;
        const result = cells[3].innerText;

        if (x===0 || y===0) {
            return;
        }
        if (result === "Да") {
            drawNormDot(x, y, rect.left, rect.right, rect.top, rect.bottom, "green");
        } else {
            drawNormDot(x, y, rect.left, rect.right, rect.top, rect.bottom, "red");
        }
    });
}


function validateForm() {
    if (validateX(parseFloat(document.querySelector("#myForm\\:x").textContent)) && validateY(document.querySelector('input[name="myForm\\:y"]').value) && validateR()) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "none";
        errorElement.textContent = "";
    }
};

const radios = document.querySelectorAll('input[name="myForm\\:r"]');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            drawGraph(radio.value);
            drawPoints();
        }
    });
});


let graph = document.getElementById('graph');
graph.addEventListener('click', function(e) {
    if (validateR()) {
        const errorElement = document.querySelector("#error");
        errorElement.style.display = "none";
        errorElement.textContent = "";
        var rect = graph.getBoundingClientRect();
        norm_x = normalizeX(e.clientX, rect.left, rect.right);
        norm_y = normalizeY(e.clientY, rect.top, rect.bottom);

        document.getElementById('chamber-of-secrets:hiddenX').value = norm_x;
        document.getElementById('chamber-of-secrets:hiddenY').value = norm_y;
        document.getElementById('chamber-of-secrets:hiddenR').value = parseFloat(getSelectedRadioValue());
        if (validateY(norm_y) && validateR()) {
            document.getElementById('chamber-of-secrets:hiddenSubmit').click();
        }
    }
});


