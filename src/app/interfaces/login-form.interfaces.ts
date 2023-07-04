import { NonNullableFormBuilder } from "@angular/forms";


export interface LoginForm{ 
    email: string;
    password: string; 
    remember:boolean;
}
