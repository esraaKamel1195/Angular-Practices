import { ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";

export function yearValidators(): ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
        if (control.value.trim().length === 0) {
            return null;
        }
        const year = parseInt(control.value, 10);
        const minYear = 1900;
        const maxYear = 2100;
        if (year >= minYear && year <= maxYear) {
            return null;
        } 
        else {
            return {
                year: {
                    min: minYear,
                    max: maxYear
                }
            };
        }
    }
}