import { NonNullableFormBuilder } from "@angular/forms";


export interface LoginForm{ 
    email: string;
    username: string;
    password: string; 
    remember:boolean;
}
