/**
==============================================
; Title: Assignment 6.2 Future Value App
; Author: Professor Richard Krasso
; Modified by: Chad ONeal
; Date: 09/12/2022
; Description: finance calculator for future value app
==============================================
*/

//finance calculator
export class FinanceCalculator 
{

    static MONTHS_IN_YEAR = 12;

    // calculates future value
    static calculateFutureValue(monthlyPayment, rate, years)
    {
        let months = years * FinanceCalculator.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));

        // returns future value calculation
        return futureValue.toFixed(2);
    }

    // conversion to $USD
    static convertToCurrency(field)
    {
        let currencyFormatter = new Intl.NumberFormat('en-US', 
        { 
            style: 'currency',
            currency: 'USD' 
        });
        return currencyFormatter.format(field);
    }
}