

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

function sendLink(){
    event.preventDefault();
    const email = "admin@user.com"
    var input = document.getElementById("inputFeild").value
    if (input === email) {
        window.location.href = "reset.html"
    } 
    else if (!input) {
        notify("Email is Required To Move On !")
        return;
    }
    else {
        notify("Email is Incorrect !")
    }
}