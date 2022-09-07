/**
*===========================================
* Title: Assignment 5.2
* Author: Professor Richard Krasso
* Modified by: Chad ONeal
* Date: 09/05/2022
* Description: shopping cart.js
*===========================================
*/

// shoppingCart class
export class ShoppingCart
{
    // Constructor with only 1 parameter: _products.
    constructor()
    {
        // _products is equal to an empty array.
        this._products = [];
    }

    // Count() counts how many objects are added to the 
    count()
    {
        return this._products.length;
    }

    // addProduct() function adds a product object to the empty _products array.
    addProduct(product)
    {
        this._products.push(product);
    }


    *[Symbol.iterator]()
        {   
            for(let product of this._products)
            {
                yield product;
            }
        }
}