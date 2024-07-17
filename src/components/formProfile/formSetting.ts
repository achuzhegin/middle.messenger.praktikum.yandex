import Block from "../../core/Block.ts"
import {  InputElement } from "./input";
import { ButtonSubmit } from "../button/index.ts";

import CheckingForm from "../modules/checkingForm.ts";
// import * as Pages from '../../pages/index.ts';
type tProps = {
    Email?:InputElement,
    Login?:InputElement,
    first_name?:InputElement,
    second_name?:InputElement,
    display_name?:InputElement,
    phone?:InputElement,
    ButtonEnter?:ButtonSubmit

    
}
type tElement = {
    
}

export default class FormSetting extends Block<tProps,tElement> {
    //@ts-ignore
    // constructor(props) {

    //     super({
    //         ...props,
    //         InputLogin: new InputLogin({

    //         })
    //     })

    // }
    init() {

        // const onChangePasswordBind = this.onChangePassword.bind(this);
        // const onClickFormLiginBind = this.onClickFormLigin.bind(this);


        const onChangeEmailBind = this.onChangeEmail.bind(this);
        const Email:InputElement = new InputElement({ label: 'Почта', onBlur: onChangeEmailBind, type: 'email', name: 'email', id: 'email', class: 'input-profile' });

        const onChangeLoginBind = this.onChangeLogin.bind(this);
        const Login:InputElement  = new InputElement({ label: 'Логин', onBlur: onChangeLoginBind, type: 'text', name: 'login', id: 'login', class: 'input-profile' });

        const onChangefirstNameBind = this.onChangefirstName.bind(this);
        const first_name:InputElement  = new InputElement({ label: 'Имя', onBlur: onChangefirstNameBind, type: 'text', name: 'first_name', id: 'first_name', class: 'input-profile' });

        const onChangeSecondNameBind = this.onChangeSecondName.bind(this);
        const second_name:InputElement  = new InputElement({ label: 'Фамилия', onBlur: onChangeSecondNameBind, type: 'text', name: 'second_name', id: 'second_name', class: 'input-profile' });

        const onChangeDisplayNameBind = this.onChangeDisplayName.bind(this);
        const display_name:InputElement  = new InputElement({ label: 'Имя в чате', onBlur: onChangeDisplayNameBind, type: 'text', name: 'display_name', id: 'display_name', class: 'input-profile' });

        const onChangePhoneBind = this.onChangePhone.bind(this);
        const phone:InputElement  = new InputElement({ label: 'Телефон', onBlur: onChangePhoneBind, type: 'text', name: 'phone', id: 'phone', class: 'input-profile' });

        const onSubmitFormProfileBind = this.onSubmitForm.bind(this);
        const ButtonEnter:ButtonSubmit  = new ButtonSubmit({ class: 'btn-profile', heading: 'Сохранить', type: 'submit', href: '', onSubmit: onSubmitFormProfileBind });






        this.children = {
            ...this.children,
            Login,
            Email,
            first_name,
            second_name,
            display_name,
            phone,
            ButtonEnter

        }
    }

    onChangeEmail(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormEmail(str);
    }
    checkFormEmail(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingEmail(str);
        if (result.error) {
            this.children.Email!.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});


        }
        else {
            this.children.Email!.setProps({ error: false, errorLabel: null });

        }
        return result.error;
    }

    onChangeLogin(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormlogin(str);
    }
    checkFormlogin(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingLogin(str);
        if (result.error) {
            this.children.Login!.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});


        }
        else {
            this.children.Login!.setProps({ error: false, errorLabel: null });

        }
        return result.error;

    }
    //first_name
    onChangefirstName(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormFirstName(str);

    }
    checkFormFirstName(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingName(str);
        if (result.error) {
            this.children.first_name!.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});


        }
        else {
            this.children.first_name!.setProps({ error: false, errorLabel: null });

        }
        return result.error;
    }

    //second_name
    onChangeSecondName(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormSecondName(str);

    }
    checkFormSecondName(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingName(str);
        if (result.error) {
            this.children.second_name!.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});


        }
        else {
            this.children.second_name!.setProps({ error: false, errorLabel: null });

        }
        return result.error;
    }
    // display_name
    onChangeDisplayName(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormDisplayName(str);
    }
    checkFormDisplayName(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingName(str);
        if (result.error) {
            this.children.display_name!.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});


        }
        else {
            this.children.display_name!.setProps({ error: false, errorLabel: null });

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
            this.children.phone!.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});
            

        }
        else {
            this.children.phone!.setProps({ error: false, errorLabel: null });

        }
        return result.error;
    }
    onSubmitForm(e: Event) {
        e.preventDefault();
        
        const element = document.querySelector('#email');
        this.checkFormEmail((element as HTMLInputElement).value);
        console.log((element as HTMLInputElement).value);

        const element_login=document.querySelector('#login');        
        this.checkFormlogin((element_login as HTMLInputElement).value);
        console.log((element_login as HTMLInputElement).value);

        const element_first_name=document.querySelector('#first_name');  
        this.checkFormFirstName((element_first_name as HTMLInputElement).value);
        console.log((element_first_name as HTMLInputElement).value);

        const element_second_name=document.querySelector('#second_name');  
        this.checkFormSecondName((element_second_name as HTMLInputElement).value);
        console.log((element_second_name as HTMLInputElement).value);

        const element_phone=document.querySelector('#phone');  
        this.checkFormPhone((element_phone as HTMLInputElement).value);
        console.log((element_phone as HTMLInputElement).value);

        const element_display_name=document.querySelector('#display_name');  
        this.checkFormDisplayName((element_display_name as HTMLInputElement).value);
        console.log((element_display_name as HTMLInputElement).value);

       
        
        
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
            <div >             
            <div >  
               {{{ Email }}} 
               {{{ Login }}} 
               {{{ first_name }}} 
               {{{ second_name }}} 
               {{{ display_name }}}   
                {{{ phone }}}              
                
               {{{ Password }}} 
                
            </div>
            <div class="row-2">
                  <div class="column-centr">
                  <p>
                     {{{ ButtonEnter }}}
                  </p>
                  <p>
                     {{> button class = "btn-profile" href = "../chats/chat.html" heading = 'Выйти'}}
                </p> 
                 

            </div>
            </div>
      
       
        `)
    }
}
