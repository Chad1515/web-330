/**
==============================================
; Title: Assignment 6.2 Future Value App
; Author: Professor Richard Krasso
; Modified by: Chad ONeal
; Date: 09/12/2022
; Description: validator js for future value app
==============================================
*/

// import statements
import { RequiredField } from "./required-field.js"
import { FloatField } from "./float-field.js"
import { FloatMinField } from "./float-field-min.js"
import { FloatMaxField } from "./float-field-max.js"

// validator class
export class Validator 
{
    // empty arrays
    validators = [];
    messages = [];

    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    }

    // required field functions 
    addRequiredField()
    {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() 
    {
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min)
    {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max)
    {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    // validation of form fields, will display error if incorrect
    validate() 
    {
        for (const validator of this.validators) 
        {
            if (!validator.validate()) {
                this.messages.push(validator.getMessage());
            }
        }
        return this.messages.length == 0;
    }
}