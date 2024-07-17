import Block from "../../core/Block"
import { FormLogin, FormMain } from "../../components"
// import {InputElement } from "../../components/input";
// import { ButtonSubmit } from "../button/index.ts";
type tProps = {
    // class:string,
    // label:string,
     FormMain?:FormMain, 
    // Login: InputElement,
    // Password:InputElement,
    //  ButtonEnter:ButtonSubmit   
    
}
type tElement= {
    
    
}
export default class Login extends Block<tProps,tElement> {
    constructor(props:tProps) {

        super({
            ...props,
            FormMain: new FormMain({
                title: 'Вход', classMain: 'formAuthorization',
                FormContent: new FormLogin()
            })
        })

    }

    render() {
        return `
        <main>
        {{{ FormMain }}}
        </main>
        `
    }
}
// formProfile formAuthorization class={{class}} 
