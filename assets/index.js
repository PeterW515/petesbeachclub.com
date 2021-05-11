let dropdownBtn = document.getElementById("dropdownBtn");

dropdownBtn.addEventListener("click", function () {
    let dropdownOptions = document.getElementsByClassName("dropdown-option");
    let navLogo = document.getElementsByClassName("nav-link-logo")[0];
    for (let i = 0; i < dropdownOptions.length; i++) {
        if (dropdownOptions[i].style.display === "none" || dropdownOptions[i].style.display=="") {
            dropdownOptions[i].style.display = "flex";
        } else {
            dropdownOptions[i].style.display = "none";

        }
    }

    if (navLogo.style.display==="flex" || navLogo.style.display==""){
    navLogo.style.display = "none";
    } else {
        navLogo.style.display="flex";
    }

})