/**
==============================================
; Title: Assignment 3.2 Restaurant App
; Author: Professor Krasso
; Modified By: Chad ONeal
; Date: 08/24/2022
; Description: beverage.js
==============================================
*/

import { Product } from "./product.js";

export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}