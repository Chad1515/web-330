/*
============================================
; Title: Assignment 4.2 Calorie App
; Author: Chad ONeal
; Date: 08/29/2022
; Description: food-model.js
;===========================================
*/

// The FoodModel class sets up the food model objects in the calorie-converter app.
export class FoodModel 
{

    // Three parameters: ID, name, and calories.
    constructor(id, name, calories)
        {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
}