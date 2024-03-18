const cButton = document.getElementById("convert-btn")
const result = document.getElementById("output")
const outputArea = document.getElementById("output-area")
const convertTable = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
}

const convertToRoman = () => {
    outputArea.classList.remove("hidden")
    result.textContent = ""
    const number = document.getElementById("number")

    if (number.value === ""){
        result.textContent = "Please enter a valid number";
        return
    }

    if (number.value > 3999){
        result.textContent = "Please enter a number less than or equal to 3999";
        return
    }
    if (number.value < 0){
        result.textContent = "Please enter a number greater than or equal to 1";
        return
    }

    let decimal = number.value

    for (const [roman,numeral] of Object.entries(convertTable)) {
        while(decimal >= numeral){
            decimal -= numeral;
            result.textContent += roman;
        }
    }
}


cButton.addEventListener("click", convertToRoman)


