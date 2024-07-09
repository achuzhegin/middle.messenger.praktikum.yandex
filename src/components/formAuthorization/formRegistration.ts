import Block from "../../core/Block.ts"

import {InputElement } from "./input";
import { ButtonSubmit } from "../button/index.ts";

import CheckingForm from "../modules/checkingForm.ts";


export default class FormRegistration extends Block {
    //@ts-ignore
    // constructor(props) {

    //     super({
    //         ...props,
    //         InputLogin: new InputLogin({

    //         })
    //     })

    // }
    init() {
        const onChangeEmailBind = this.onChangeEmail.bind(this);
        const Email = new InputElement({ label: 'Почта', onBlur: onChangeEmailBind, type: 'email', name: 'email', id: 'email', class: 'input-authorization' }); 
        
        const onChangeFirstNameBind = this.onChangeFirstName.bind(this);
        const FirstName = new InputElement({ label: 'Имя', onBlur: onChangeFirstNameBind, type: 'text', name: 'first_name', id: 'first_name', class: 'input-authorization' }); 
        
        const onChangeSecondNameBind = this.onChangeSecondName.bind(this);
        const SecondName = new InputElement({ label: 'Фамилия', onBlur: onChangeSecondNameBind, type: 'text', name: 'second_name', id: 'second_name', class: 'input-authorization' }); 
        
        const onChangePhoneBind = this.onChangePhone.bind(this);
        const Phone = new InputElement({ label: 'Телефон', onBlur: onChangePhoneBind, type: 'text', name: 'phone', id: 'phone', class: 'input-authorization' }); 
        
        const onChangePasswordBind = this.onChangePassword.bind(this);        
        const Password = new InputElement({ label: 'Пароль', onBlur: onChangePasswordBind, type: 'password', name: 'oldPassword', id: 'oldPassword', class: 'input-authorization'});

        const onChangeNewPasswordBind = this.onChangeNewPassword.bind(this);        
        const newPassword = new InputElement({ label: 'Пароль (еще раз)', onBlur: onChangeNewPasswordBind, type: 'password', name: 'newPassword', id: 'newPassword', class: 'input-authorization' });



      
        const onSubmitFormLoginBind = this.onSubmitFormLogin.bind(this);

        const ButtonEnter = new ButtonSubmit({ class: 'btn-authorization', heading: 'Зарегестрироваться', type: 'submit' ,href: '', onSubmit: onSubmitFormLoginBind });
        
        this.children = {
            ...this.children,
            Email,
            FirstName,
            SecondName,
            Phone,
            Password,
            newPassword,
            ButtonEnter


        }
    }
    //Email
    onChangeEmail(e: Event) {
       
        const str = (e.target as HTMLInputElement).value;
        this.checkFormEmail(str);
      
    }
    checkFormEmail(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingEmail(str);
        if (result.error) {
            this.children.Email.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});
            

        }
        else {
            this.children.Email.setProps({ error: false, errorLabel: null });

        }
        return result.error;
    }
    //FirstName
    onChangeFirstName(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormFirstName(str);
      
    }
    checkFormFirstName(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingName(str);
        if (result.error) {
            this.children.FirstName.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});
            

        }
        else {
            this.children.FirstName.setProps({ error: false, errorLabel: null });

        }
        return result.error;
    }
     //SecondName
     onChangeSecondName(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormSecondName(str);
      
    }
    checkFormSecondName(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingName(str);
        if (result.error) {
            this.children.SecondName.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});
            

        }
        else {
            this.children.SecondName.setProps({ error: false, errorLabel: null });

        }
        return result.error;
    }
    // Phone
    onChangePhone(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormPhone(str);
      
    }
    checkFormPhone(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingPhone(str);
        if (result.error) {
            this.children.Phone.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});
            

        }
        else {
            this.children.Phone.setProps({ error: false, errorLabel: null });

        }
        return result.error;
    }
   
    // Password
    onChangePassword(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormPassword(str);
    }
    checkFormPassword(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingPassword(str);
        if (result.error) {
            this.children.Password.setProps({ error: true, errorLabel: result.errorText });


        }
        else {
            this.children.Password.setProps({ error: false, errorLabel: null });

        }
        return result.error;

    }
    // NewPassword   
    onChangeNewPassword(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormNewPassword(str);
    }
    checkFormNewPassword(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingPassword(str);
        if (result.error) {
            this.children.newPassword.setProps({ error: true, errorLabel: result.errorText });


        }
        else {
            this.children.newPassword.setProps({ error: false, errorLabel: null });

        }
        return result.error;
    }
    
    onSubmitFormLogin(e: Event) {
        e.preventDefault();
        
        // let element = document.querySelector('#Email');
        const elementEmail = document.querySelector('#email');
        this.checkFormEmail((elementEmail as HTMLInputElement).value);
        
        const elementfirst_name = document.querySelector('#first_name');
        this.checkFormFirstName((elementfirst_name as HTMLInputElement).value);
        
        const elementsecond_name = document.querySelector('#first_name');
        this.checkFormSecondName((elementsecond_name as HTMLInputElement).value);

        const elementphone = document.querySelector('#first_name');
        this.checkFormPhone((elementphone as HTMLInputElement).value);

        const elementoldPassword = document.querySelector('#oldPassword');
        this.checkFormPassword((elementoldPassword as HTMLInputElement).value);

        const elementnewPassword = document.querySelector('#newPassword');
        this.checkFormNewPassword((elementnewPassword as HTMLInputElement).value);

        console.log((elementEmail as HTMLInputElement).value); 
        console.log((elementfirst_name as HTMLInputElement).value); 
        console.log((elementsecond_name as HTMLInputElement).value); 
        console.log((elementphone as HTMLInputElement).value); 
        console.log((elementoldPassword as HTMLInputElement).value); 
        console.log((elementnewPassword as HTMLInputElement).value); 
       
        
        
        // const app = document.getElementById('app')!;

        // //@ts-ignore
        // const Component = Pages.login;
        // const component = new Component();

        // app.innerHTML = '';
        // app.append(component.getContent()!);
        // // debugger;

    }    
    

    render() {
        return (`
        <div>
            <div class="row">
                      {{{ Email }}}
                      {{{ FirstName }}} 
                      {{{ SecondName }}} 
                      {{{ Phone }}} 
                      {{{ Password }}}   
                       {{{ newPassword }}}      

            </div>
            <div class="row-2">
                  <div class="column-authorization-2">
                <p>
                   {{{ ButtonEnter }}}    
                </p>
                <p>
                    {{> button class = "btn-authorization" href = "#" heading = 'Нет
                     аккаунта'}}
                </p>

            </div>
       </div>
       
        `)
    }
}
