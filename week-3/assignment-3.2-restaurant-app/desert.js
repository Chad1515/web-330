/**
 * ========================================================
 * Title: Appetizer JS
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 4, 2021
 * Description: appetizer.js to be passed to the index file
 * ========================================================
 */

//imported product class
import { Product } from "./product.js";

//dessert class to be exported
export class Dessert extends Product {

    constructor(name, price) {

        super(name, price);
    }
}