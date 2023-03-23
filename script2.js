
// -------------------------------------------------------------------------------------------------------------------------------

function notify(msg) {
    Toastify({
        text: msg,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to left, #808080, #000000)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
notify("Successfully Loged In")

// -------------------------------------------------------------------------------------------------------------------------------

document.getElementById("clr").onclick = function () {
    input.value = ""
}

document.getElementById("clearResult").onclick = function () {
    result.innerHTML = " ";
}

// -------------------------------------------------------------------------------------------------------------------------------

var result = document.getElementById("result");
var cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];
console.log(cities);
// -------------------------------------------------------------------------------------------------------------------------------

function printAll() {
    result.innerHTML = " "
    for (let index = 0, sr = 1; index < cities.length; index++, sr++) {
        result.innerHTML += sr + ")" + cities[index] + "<br>";
    }
    console.log(cities);
}

// --------------------------------------------------------------------------------------------------------------------------------

function add() {
    let city = document.getElementById("input").value;
    if (!city) {
        result.innerHTML = "Please Enter City Name in Input Field !"
        notify("Please Enter City Name in Input Field !")
        return;
    }
    if (city.length < 4) {
        result.innerHTML = "PLease Enter City Name Correctly !"
        notify("PLease Enter City Name Correctly !")
        return
    }
    let cityFirstLetter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();
    let capitalized = cityFirstLetter + cityAllLetters;
    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === capitalized) {
            cityFound = true;
            result.innerHTML = '<span style="font-size: 26px; color: red;">"' + capitalized + '"</span> Already in your list !'
            notify(capitalized + " Already in your list !")
            return;
        }
    }
    if (cityFound === false) {
        cities.push(capitalized);
        result.innerHTML = '<span style="font-size: 26px; color: green;">"' + capitalized + '"</span> Added to your list !'
        notify(capitalized + " Added to your list !")
    }
    cities.push(city);
    result.innerHTML = '<span style="font-size: 26px; color: green;">"' + city + '"</span> Added to your list !'
    notify(city + "</span> Added to your list !")
}

// -------------------------------------------------------------------------------------------------------------------------------

function check() {
    let city = document.getElementById("input").value;
    if (city.length < 3) {
        result.innerHTML = "Please Enter Valid City Name in Input Field !"
        notify("Please Enter Valid City Name in Input Field !")
        return;
    }
    let cityFirstLetter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();
    let capitalized = cityFirstLetter + cityAllLetters;
    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {

        if (cities[i] === capitalized) {
            cityFound = true;
            result.innerHTML = '<span style="font-size: 26px; color: green;">"' + capitalized + '"</span> is in your list ❤️ !'
            notify(capitalized + "is in your list ❤️ !")
        }
    }
    if (cityFound === false) {
        result.innerHTML = 'Oops!  <span style="font-size: 26px; color: red;">"' + capitalized + '"</span> is not in your list ! <br><br>Press <span style="color: crimson;">Add City in List</span> to add 😊'
        notify(capitalized + "is not in your list !")
    }
}

// --------------------------------------------------------------------------------------------------------------------------------