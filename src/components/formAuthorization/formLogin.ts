import Block from "../../core/Block.ts"

import {InputElement } from "./input";
import { ButtonSubmit } from "../button/index.ts";

import CheckingForm from "../modules/checkingForm.ts";


export default class FormLogin extends Block {
    
    // constructor(props) {

    //     super({
    //         ...props,
    //         InputLogin: new InputLogin({

    //         })
    //     })

    // }
    init() {
        const onChangeLoginBind = this.onChangeLogin.bind(this);
        const onChangePasswordBind = this.onChangePassword.bind(this);
        // const onClickFormLiginBind = this.onClickFormLigin.bind(this);
        const onSubmitFormLoginBind = this.onSubmitFormLogin.bind(this);

        // const Login = new InputLogin({ label: 'Логин', onBlur: onChangeLoginBind });
        // const Password = new InputPassword({ label: 'Пароль', onBlur: onChangePasswordBind });
        // // const ButtonEnter = new ButtonSubmit({ class: 'btn', heading: 'Войти', href: '', onClick: onClickFormLiginBind });
        const ButtonEnter = new ButtonSubmit({ class: 'btn-authorization', heading: 'Войти', type: 'submit' ,href: '', onSubmit: onSubmitFormLoginBind });
        const Login = new InputElement({ label: 'Логин', onBlur: onChangeLoginBind, type: 'text', name: 'login', id: 'login', class: 'input-authorization' }); 
        const Password = new InputElement({ label: 'Пароль', onBlur: onChangePasswordBind, type: 'Password', name: 'Password', id: 'Password', class: 'input-authorization'  });
       
        this.children = {
            ...this.children,
            Login,
            Password,
            ButtonEnter

        }
    }
    onChangeLogin(e: Event) {
        if (e.target == null) {
            return;
        }
        const str = (e.target as HTMLInputElement).value;
        this.checkFormlogin(str);
    }
    onChangePassword(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormPassword(str);
    }
    // onClickFormLigin(e: Event) {
    //     const elementLogin = document.querySelector('#login');
    //     if(elementLogin !== null) {
    //         console.log((elementLogin as HTMLInputElement).value); 
    //     }
    //     const elementPassword = document.querySelector('#Password');
    //     if(elementPassword !== null) {
    //         console.log((elementPassword as HTMLInputElement).value); 
    //     }
        
        
    //     // const app = document.getElementById('app')!;

    //     // //@ts-ignore
    //     // const Component = Pages.login;
    //     // const component = new Component();

    //     // app.innerHTML = '';
    //     // app.append(component.getContent()!);
    //     // // debugger;

    // }
    onSubmitFormLogin(e: Event) {
        e.preventDefault();
        const elementLogin = document.querySelector('#login');
        console.log((elementLogin as HTMLInputElement).value); 
       
        const elementPassword = document.querySelector('#Password');
        console.log((elementPassword as HTMLInputElement).value); 
        
        this.checkFormlogin((elementLogin as HTMLInputElement).value);
        this.checkFormPassword((elementPassword as HTMLInputElement).value);
        
        
        // const app = document.getElementById('app')!;

        // //@ts-ignore
        // const Component = Pages.login;
        // const component = new Component();

        // app.innerHTML = '';
        // app.append(component.getContent()!);
        // // debugger;

    }
    checkFormlogin(str: string): boolean {
        const x = new CheckingForm;
        const result : {errorText: string, error: boolean} = x.checkingLogin(str);
        if (result.error) {
            this.children.Login.setProps({ error: true, errorLabel: result.errorText });
            // this.children.Input.setProps({error: true, errorLabel: 'some error23'});
            

        }
        else {
            this.children.Login.setProps({ error: false, errorLabel: null });

        }
        return result.error;

    }
    checkFormPassword(str: string): boolean {
        const x = new CheckingForm;
        const result: {errorText: string, error: boolean}  = x.checkingPassword(str);
        if (result.error) {
            this.children.Password.setProps({ error: true, errorLabel: result.errorText });


        }
        else {
            this.children.Password.setProps({ error: false, errorLabel: null });

        }
        return result.error;

    }




    render() {
        return (`
        <div>
            <div class="row">
                      {{{ Login }}}
                      {{{ Password }}}         

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