/**
==============================================
; Title: Assignment 3.2 Restaurant App
; Author: Professor Krasso
; Modified By: Chad ONeal
; Date: 08/24/2022
; Description: main-course.js
==============================================
*/

//imported product class
import { Product } from "./product.js";

//appetizer class to be exported
export class MainCourse extends Product {

    constructor(name, price) {

        super(name, price);
    }
}