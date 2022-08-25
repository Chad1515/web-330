/**
==============================================
; Title: Assignment 3.2 Restaurant App
; Author: Tierre Green from Github
; Modified By: Chad ONeal
; Date: 08/24/2022
; Description: bill.js
==============================================
*/

//export of bill class containing all menu items
export class Bill {

    constructor(_beverages, _appetizers, _mainCourses, _desserts)

{
this._beverages = [];
this._appetizers = [];
this._mainCourses = [];
this._desserts = [];
}

//add beverage function
addBeverage(beverage){
    this._beverages.push(beverage);
}

//add appetizer function 
addAppetizer(appetizer){
    this._appetizers.push(appetizer);
}

//add main-course function
addMainCourse(mainCourse){
    this._mainCourses.push(mainCourse);
}

//add dessert function
addDessert(dessert){
    this._desserts.push(dessert);
}

//function to add total of all items selected. 
getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(function(beverage)
    {
        total += parseFloat(beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(function(appetizer)
    {
        total += parseFloat(appetizer.price);
    });

    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
    {
        total += parseFloat(mainCourse.price);
    });

    let dessertTotal = this._desserts.forEach(function(dessert)
    {
        total += parseFloat(dessert.price);
    });

    console.log('Your order total is $[total]');

    //return of all menu items selected totaled up
    return total.toFixed(2);
}

}