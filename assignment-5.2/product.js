/**
*===========================================
* Title: Assignment 5.2
* Author: Professor Richard Krasso
* Modified by: Chad ONeal
* Date: 09/05/2022
* Description: product.js for Bob's 
*===========================================
*/

// Create and export product class with name and price params.
export class Product
{
    constructor(name, price)
        {
            this.name = name;
            this.price = price;
            this.id = Math.random().toString(16).slice(2);
        }
}