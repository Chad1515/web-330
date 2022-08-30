/*
============================================
; Title: Assignment 4.2 calorie App
; Author: Chad ONeal
; Date: 08/29/2022
; Description: calorie-converter.js
;===========================================
*/

// Import FoodModel class.
import { FoodModel } from "./food-model.js";

// Created calorie-converter class.
export class CalorieConverter
{
    // Setup arrays for each food object.
    static data = 
    [
        new FoodModel (1007, 'Egg', 78),
        new FoodModel (1008, 'Apple', 95),
        new FoodModel (1009, 'Hamburger', 354),
        new FoodModel (1010, 'Fries', 400),
        new FoodModel (1011, 'Banana', 105),
        new FoodModel (1012, 'Soda', 150),
    ]

    // This function will return the respective food model object based on user input.
    static find(string)
    {
        return this.data.filter(foodModel => foodModel.name.toLowerCase().includes(string.toLowerCase()));
    }
}