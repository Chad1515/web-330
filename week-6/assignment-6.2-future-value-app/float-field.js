/**
==============================================
; Title: Assignment 6.2 Future Value App
; Author: Professor Richard Krasso
; Modified by: Chad ONeal
; Date: 09/12/2022
; Description: float field js
==============================================
*/

// float field class
export class FloatField
{
    constructor(name, field)
        {
            this.name = name;
            this.field = field;
        }
    
    validate() 
    {
        // parseFloat input and if NaN returns false
        let checkForNaN = parseFloat(this.field);
        return !isNaN(checkForNaN)
    }
    
    getMessage() 
    {
        return `${this.name} must be a float value. You entered ${this.field}`
    }
}