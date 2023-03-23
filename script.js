
function notify(msg) {
    Toastify({
        text: msg,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        hideProgressBar: false,
        // gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        progress: undefined,
        draggable: true,
        pauseOnHover: true,
        closeOnClick: true,
        theme: "dark",
        style: {
            background: "linear-gradient(to left, #808080, #000000)",
        },
    //     position: "top-right",
    // autoClose: 5000,
        onClick: function () { } // Callback after click
    }).showToast();
}

// -----------------------------------------------------------------------------------------------------------------

const email = "admin@user.com"
const pass = "123456"
console.log(userEmail)
console.log(userPass)
function loginBtn() {
    event.preventDefault();
    const userEmail = document.getElementById("email").value
    const userPass = document.getElementById("password").value
    console.log(userEmail)
    console.log(userPass)

    if (userEmail === email && userPass === pass) {
        window.location.href = "home.html"
    } 
    else if (!userEmail || !userPass) {
        notify("Email And Password Both are Required To Move On !")
        return;
    }
    else {
        notify("Email And Password are Incorrect !")
    }
    
}