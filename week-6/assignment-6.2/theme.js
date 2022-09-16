/**
====================================================
; Title: Assignment 5.2 Bob's Auto Repair Shop
; Author: Professor Richard Krasso
; Modified by: Chad ONeal
; Date: 09/05/2022
; Description: theme.js for future value app
====================================================
*/

setDefaultTheme();

// default theme function set to user preference based on browser settings.
function setDefaultTheme() {

    // declaration of iconMode and iconText variable theme mode for localStorage get item.
    const theme = localStorage.getItem("colorTheme") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    // saves mode and theme in browser storage.
    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

function toggleMode(x) {  
    let colorTheme = document.body.classList.value;
    let iconMode = document.getElementById("icon-mode").classList.value;
    
    // if else statements toggling from light to dark.
    if (document.body.classList.value === "dark-theme") {

        // dark mode theme setting 
        document.body.classList.value = "light-theme";

       // change of visual portrayal. 
        document.getElementById("icon-mode").classList.remove("fa-toggle-on");
        document.getElementById("icon-mode").classList.add("fa-toggle-off");
        document.getElementById("icon-text").innerHTML = "Light Mode"

        localStorage.setItem("colorTheme", "light-theme")
        localStorage.setItem("iconText", "Light Mode")
        localStorage.setItem("iconMode", "fa-toggle-on")
        
    } else {

        // toggles from light to dark theme when all else 
        document.body.classList.value = "dark-theme";

        // change of visual portrayal. 
        document.getElementById("icon-mode").classList.remove("fa-toggle-off");
        document.getElementById("icon-mode").classList.add("fa-toggle-on");
        document.getElementById("icon-text").innerHTML = "Dark Mode"

        localStorage.setItem("colorTheme", "dark-theme")
        localStorage.setItem("iconText", "Dark Mode")
        localStorage.setItem("iconMode", "fa-toggle-on")

    }
}