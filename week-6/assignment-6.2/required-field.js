/**
==============================================
; Title: Assignment 6.2 Future Value App
; Author: Professor Richard Krasso
; Modified by: Chad ONeal
; Date: 09/12/2022
; Description: required field js for future value app
==============================================
*/


// class for required fields
export class RequiredField
{
    constructor(name, field)
        {
            this.name = name;
            this.field = field;
        }

    // returns true if field is a valid string
    validate() 
    {
        let valid =  Boolean(this.field)
        if (valid){
            valid = Boolean(this.field.trim());
        }
        return valid;
        
    }

    // called when no name is input
    getMessage() 
    {
        return this.name + " is a required field."; 
    }
}