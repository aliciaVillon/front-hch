import { NonNullableFormBuilder } from "@angular/forms";


export interface RegisterForm{
    nombre: string;
    email: string;
    password: string;
    password2: string;
    terminos: boolean;
}
