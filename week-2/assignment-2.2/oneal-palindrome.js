 /**
 =================================================
 * Title: Assignment 2.2 Palindrome App
 * Author: Tierre Green from Github
 * Modified By: Chad ONeal
 * Date: 08/18/2022
 * Description: Palindrome App for assignment 2.2
 =================================================
*/



// function for todays date
function getTodaysDate() {

    let today = new Date();
    let date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
    document.getElementById("assign-results").innerHTML = `Date: ${date}`;
    return date;
}

// function for length of string
function getLength(string) {

    let stringLength = string.length;
    return stringLength;
}

// function that reverses string 
function reverse(string) 
{
    let splitString = string.split("")
    let reverseString = splitString.reverse();
    let combine = reverseString.join("");
    return combine.toLowerCase();
}

// palindrome function to determine if reversed string is equal to original string
function isPalindrome(string)
{
    let result = '';
    if (string === reverse(string)) {
        result = string + " <u><b>is</b></u> " + "a palindrome!";
    } else {
        result = string + " <u><b>is not</b></u> " + "a palindrome!";
    }
    document.getElementById("assign-results-header").innerHTML = result;
}

//phrase check function
function phraseCheck() {

// user input function
    let txtPhrase = document.getElementById("txtPhrase").value.toLowerCase();  

// gets todays date
    const today = getTodaysDate();
    
    const phraseLength = getLength(txtPhrase);

// reverse of string user inputs 
    let reversedPhrase = reverse(txtPhrase);

// list of all outputs to display in results
    let header = "Date: " + today + "<br>" + "Original Phrase: " + txtPhrase + "<br>" + 
                "Reversed Phrase: " + reversedPhrase + "<br>" + "Phrase Length: " + phraseLength;

// HTML header display
    document.getElementById("assign-results").innerHTML = header;

//palindrome function passed through user input string.
    isPalindrome(txtPhrase);                
}