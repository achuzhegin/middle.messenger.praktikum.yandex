import Block from "../../core/Block.ts"
import { InputElement } from "./input";
import { ButtonSubmit } from "../button/index.ts";
// import { InputPassword } from "../inputPassword/index.ts";
import CheckingForm from "../modules/checkingForm.ts";
// import * as Pages from '../../pages/index.ts';


export default class FormPassword extends Block {
    //@ts-ignore
    // constructor(props) {

    //     super({
    //         ...props,
    //         InputLogin: new InputLogin({

    //         })
    //     })

    // }
    init() {
        // const onChangeLoginBind = this.onChangeLogin.bind(this);
        // const onChangePasswordBind = this.onChangePassword.bind(this);
        // const onClickFormLiginBind = this.onClickFormLigin.bind(this);
        
        
        const onChangePasswordBind = this.onChangePassword.bind(this);        
        const Password = new InputElement({ label: 'Пароль', onBlur: onChangePasswordBind, type: 'password', name: 'oldPassword', id: 'oldPassword', class: 'input-profile'});

        const onChangeNewPasswordBind = this.onChangeNewPassword.bind(this);        
        const newPassword = new InputElement({ label: 'Новый пароль', onBlur: onChangeNewPasswordBind, type: 'password', name: 'newPassword', id: 'newPassword', class: 'input-profile' });

        const onChangeConfirmationPasswordBind = this.onChangeConfirmationPassword.bind(this);        
        const confirmationPassword = new InputElement({ label: 'Подтвердите новый пароль', onBlur: onChangeConfirmationPasswordBind , type: 'password', name: 'confirmationPassword', id: 'confirmationPassword', class: 'input-profile'});


        // const ButtonEnter = new ButtonSubmit({ class: 'btn', heading: 'Войти', href: '', onClick: onClickFormLiginBind });
        const onSubmitFormLoginBind = this.onSubmitForm.bind(this);
        const ButtonEnter = new ButtonSubmit({ class: 'btn-profile', heading: 'Войти', type: 'submit' ,href: '', onSubmit: onSubmitFormLoginBind });


        this.children = {
            ...this.children,
            Password,
            newPassword,
            confirmationPassword,
            ButtonEnter

        }
    }
   
    onChangePassword(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormPassword(str);
    }
    onChangeConfirmationPassword(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormConfirmationPassword(str);
    }
    onChangeNewPassword(e: Event) {
        const str = (e.target as HTMLInputElement).value;
        this.checkFormNewPassword(str);
    }

   
    onSubmitForm(e: Event) {
        e.preventDefault();
        
        let element = document.querySelector('#oldPassword');
        this.checkFormPassword((element as HTMLInputElement).value);
        const element_newPassword = document.querySelector('#newPassword');
        this.checkFormConfirmationPassword((element_newPassword as HTMLInputElement).value);
        const element_confirmationPassword = document.querySelector('#confirmationPassword');
        this.checkFormNewPassword((element_confirmationPassword as HTMLInputElement).value);
        
       
        console.log((element as HTMLInputElement).value);
        console.log((element_newPassword as HTMLInputElement).value);
        console.log((element_confirmationPassword as HTMLInputElement).value);
        
        // const app = document.getElementById('app')!;

        // //@ts-ignore
        // const Component = Pages.login;
        // const component = new Component();

        // app.innerHTML = '';
        // app.append(component.getContent()!);
        // // debugger;

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
    checkFormConfirmationPassword(str: string): boolean {
        const x = new CheckingForm;
        const result = x.checkingPassword(str);
        if (result.error) {
            this.children.confirmationPassword.setProps({ error: true, errorLabel: result.errorText });


        }
        else {
            this.children.confirmationPassword.setProps({ error: false, errorLabel: null });

        }
        return result.error;

    }





    render() {
        return (`
            <div >             
            <div >  
               {{{ Password }}} 
               {{{ newPassword }}} 
               {{{ confirmationPassword }}} 
               
                
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