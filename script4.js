

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

// --------------------------------------------------------------------------------------------------------

function confirmPass(){
    event.preventDefault();
    let input1 = document.getElementById("inputFeild").value
    let input2 = document.getElementById("inputFeild2").value
    if (input1===input2) {
        window.location.href = "home.html"
    }
    else if (input1!==input2) {
        notify("Password didn't Match !")
    } else {
        notify("Type Your New Password Corectly !")
    }
}