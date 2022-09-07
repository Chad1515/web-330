/**
*===========================================
* Title: Assignment 5.2
* Author: Professor Richard Krasso
* Modified by: Chad ONeal
* Date: 4/18/2021
* Description: cart-component.js
*===========================================
*/

// The CartComponent class adds a web component
export class CartComponent extends HTMLElement
{
    constructor()
        {
            super();
        }

        // Adding web component for Shopping Cart icons
        connectedCallback() 
        {
            this.innerHTML = 
                `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
        }
}

customElements.define("cart-component", CartComponent);