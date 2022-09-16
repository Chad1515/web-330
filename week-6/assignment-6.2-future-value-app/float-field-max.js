/**
==============================================
; Title: Assignment 6.2 Future Value App
; Author: Professor Richard Krasso
; Modified by: Chad ONeal
; Date: 09/12/2022
; Description: float field max js for future value app
==============================================
*/

// float-max-field class
export class FloatMaxField
{
    constructor(name, field, max)
        {
            this.name = name;
            this.field = field;
            this.max = max;
        }
    
    // validation to the maximum amount
    validate() 
    {
        let floatField = parseFloat(this.field);
        return (floatField < this.max);
    }

    // over max then following messages displays
    getMessage()
    {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;
    }
}