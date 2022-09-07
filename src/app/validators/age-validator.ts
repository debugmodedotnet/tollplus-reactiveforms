import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function ageRangeValidator(minAge:number, maxAge: number) : ValidatorFn{

    return (control : AbstractControl) : ValidationErrors | null =>{
        if(control.value !== undefined && (isNaN(control.value) || 
        control.value < minAge || control.value > maxAge)    ) {
            return {
                'ageError': true 
            }
        }
        return null; 
    }
}