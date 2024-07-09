import Block from "../../core/Block.ts"
import { InputElement } from "./input";
import { ButtonSubmit } from "../button/index.ts";

import * as Pages from '../../pages/index.ts';

export default class FormProfile extends Block {
    tr:{}={};
    //@ts-ignore
    // constructor(props) {

    //     super({
    //         ...props,
    //         InputLogin: new InputLogin({

    //         })
    //     })

    // }
    init() {    
       

        const Email = new InputElement({ label: 'Почта',  type: 'email', name: 'email', id: 'email', class: 'input-profile' });

        const Login = new InputElement({ label: 'Логин',  type: 'text', name: 'login', id: 'login', class: 'input-profile' });

        const first_name = new InputElement({ label: 'Имя',  type: 'text', name: 'first_name', id: 'first_name', class: 'input-profile' });

        const second_name = new InputElement({ label: 'Фамилия',  type: 'text', name: 'second_name', id: 'second_name', class: 'input-profile' });

        const display_name = new InputElement({ label: 'Имя в чате',  type: 'text', name: 'display_name', id: 'display_name', class: 'input-profile' });

        const phone = new InputElement({ label: 'Телефон', type: 'text', name: 'phone', id: 'phone', class: 'input-profile' });  

        const onSubmitFormBind = this.onSubmitForm.bind(this);
        const ButtonEnter = new ButtonSubmit({ class: 'btn-profile-2', heading: 'Изменить данные', type: 'submit' ,href: '', onSubmit: onSubmitFormBind });

        const onSubmitFormBind_2 = this.onSubmitForm_2.bind(this);
        const ButtonEnter_2 = new ButtonSubmit({ class: 'btn-profile-2', heading: 'Изменить пароль', type: 'submit' ,href: '', onSubmit: onSubmitFormBind_2 });
        
        

        this.children = {
            ...this.children,
            Login,
            Email,
            first_name,
            second_name,
            display_name,
            phone,
            ButtonEnter,
            ButtonEnter_2
         

        }
    }

    onSubmitForm(e: Event) {
        e.preventDefault();        
        const app = document.getElementById('app')!;
               //@ts-ignore
        const Component = Pages.Setting;
        const component = new Component(this.tr);

        app.innerHTML = '';
        app.append(component.getContent()!);
        // // debugger;
    }  
    onSubmitForm_2(e: Event) {
        e.preventDefault();        
        const app = document.getElementById('app')!;
               //@ts-ignore
        const Component = Pages.Password;
        const component = new Component(this.tr);

        app.innerHTML = '';
        app.append(component.getContent()!);
        // // debugger;
    }  

   
  


    render() {
        return (`
            <div >                  
               {{{ Email }}}                
               {{{ Login }}} 
               {{{ first_name }}} 
               {{{ second_name }}} 
               {{{ display_name }}}   
                {{{ phone }}}                 
               {{{ Password }}}          
           
            <div class="row-2">
                  <div class="column-profile-2">
                 <p>
                            {{{ButtonEnter}}}
                        </p>
                        <p>
                            {{{ButtonEnter_2}}}
                        </p>
                        <p>
                            {{> button class = "btn-profile-3" href = "../chats/chat.html" heading = 'Выйти'}}
                        </p>

            </div>
            </div>
      
       
        `)
    }
}