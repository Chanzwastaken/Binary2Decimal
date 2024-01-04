function ConvertNumber() {
    let bin = document.getElementById('bin').value;

    // Check if the input is a valid binary number
    if (/^[01]+$/.test(bin) === false) {
        alert("Invalid binary number. Please enter a valid binary number.");
        return;
    }

    // Convert binary to decimal
    let decimal = 0;
    for (let i = 0; i < bin.length; i++) {
        decimal += parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i);
    }

    document.getElementById('resultbin').innerHTML = 'The decimal equivalent of ' + bin + ' is ' + decimal;
}

function convertBin() {
    bin = ''; // Add this line to reset the value of 'bin'
    let decimal = document.getElementById('dec').value;

    // Check if the input is a valid decimal number
    if (/^\d+$/.test(decimal) === false) {
        alert("Invalid decimal number. Please enter a valid decimal number.");
        return;
    }

    // Convert decimal to binary
    while (decimal > 0) {
        bin = decimal % 2 + bin;
        decimal = Math.floor(decimal / 2);
    }

    document.getElementById('resultdec').innerHTML = 'The binary equivalent of ' + document.getElementById('dec').value + ' is ' + bin;
}