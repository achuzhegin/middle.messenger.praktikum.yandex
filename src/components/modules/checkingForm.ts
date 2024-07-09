//@ts-nocheck
export default class CheckingForm {
  //@ts-ignore
    
    checkingLogin (login: string): {errorText: string, error: boolean}
     {
       const str: RegExp = /^[a-zA-Z][a-zA-Z0-9-_\.]{3,20}$/;
       const obj: {errorText: string, error: Boolean} = {errorText: "", error: false};
       if (!str.test(login)) {
        obj.errorText = 'Должен содержать от 3 до 20 символов, латиница, может содержать цифры';
        obj.error = true;
       }
       return obj;
    }
    
    checkingPassword (Password: string): {errorText: string, error: boolean}
     {
       const str: string = /^(?=.*[0-9])(?=.*[A-Z]).{8,40}$/;
       const obj: {errorText: string, error: Boolean} = {errorText: "", error: false};
       if (!str.test(Password)) {
        obj.errorText = 'Должен содержать от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра';
        obj.error = true;
       }
       return obj;
    }
    checkingName (Name: string): {errorText: string, error: boolean}
     {
       const str: string = /^[A-ZА-Я][А-Яа-яa-zA-Z0-9-_]+$/;
       const obj: {errorText: string, error: Boolean} = {errorText: "", error: false};
       if (!str.test(Name)) {
        obj.errorText = 'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов';
        obj.error = true;
       }
       return obj;
    }
    checkingEmail (Email: string): {errorText: string, error: boolean}
     {
       const str: string = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       const obj: {errorText: string, error: Boolean} = {errorText: "", error: false};
       if (!str.test(Email)) {
        obj.errorText = 'Обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы';
        obj.error = true;
       }
       return obj;
    }
    checkingPhone (Phone: string): {errorText: string, error: boolean}
     {
       const str: string =/^(?:\+|\d)[\d]{9,14}$/;
       const obj: {errorText: string, error: Boolean} = {errorText: "", error: false};
       if (!str.test(Phone)) {
        obj.errorText = ' от 10 до 15 символов, состоит из цифр, может начинается с плюса';
        obj.error = true;
       }
       return obj;
    }
    
    

}

    

