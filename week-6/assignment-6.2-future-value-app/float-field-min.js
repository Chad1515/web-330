/**
==============================================
; Title: Assignment 6.2 Future Value App
; Author: Professor Richard Krasso
; Modified by: Chad ONeal
; Date: 09/12/2022
; Description: float field min for future value app
==============================================
*/

// float-min-field class
export class FloatMinField
{
    constructor(name, field, min)
        {
            this.name = name;
            this.field = field;
            this.min = min;
        }
    
    // validation of minimum amount
    validate() 
    {
        let floatField = parseFloat(this.field);
        return (floatField > this.min);
    }

    // if field is under minimum, the following messages displays
    getMessage()
    {
        return `${this.name} must be more than ${this.max}. You entered ${this.field}.`;
    }
}