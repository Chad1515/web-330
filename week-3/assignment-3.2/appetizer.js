/**
==============================================
; Title: Assignment 3.2 Restaurant App
; Author: Professor Krasso
; Modified By: Chad ONeal
; Date: 08/24/2022
; Description: appetizer.js
==============================================
*/

import { Product } from "./product.js";

export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}