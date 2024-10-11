let btnEl = document.getElementById("updateBtn");
let NewE1 = document.getElementById("newPassword");
let confirmEl = document.getElementById("confirmPassword");
let newPara = document.getElementById("newPasswordErrMsg");
let confirmPara = document.getElementById("confirmPasswordErrMsg");

btnEl.addEventListener("click", function(event) {
    event.preventDefault();


    if (NewE1.value === "") {
        newPara.textContent = "Required*";
    } else {
        newPara.textContent = "";
    }


    if (confirmEl.value === "") {
        confirmPara.textContent = "Required*";
    } else if (NewE1.value !== confirmEl.value) {
        confirmPara.textContent = "Passwords Must be same";
    } else {
        confirmPara.textContent = "";
        alert("Password Changed Successfully");
    }

    console.log(NewE1.value);
})

NewE1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        newPara.textContent = "Requried*";
    } else {
        newPara.textContent = "";
    }
});

confirmEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        confirmPara.textContent = "Requried*";
    } else {
        confirmPara.textContent = "";
    }
});