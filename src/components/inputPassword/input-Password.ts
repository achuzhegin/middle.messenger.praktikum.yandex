import Block from "../../core/Block";
import {InputField} from "../input";
import {ErrorText} from "../input";
// import ErrorText from "./error-text";

interface Ref {
   
    onBlur?: (e: Event) => void,
    events?: {
        onBlur: (e: Event) => void
    }
    
}

class InputPassword extends Block {
    //@ts-ignore
    constructor(props:Ref) {
        super({
            ...props,
            InputField: new InputField({
                events: {
                    blur: props.onBlur || (() => {}) 
                },
                type: 'password', name: 'Password', id: 'Password'
                
            }), 
            ErrorText: new ErrorText({
                error: false, errorLabel: ''
            })
        })
    }
    componentDidUpdate(oldProps: any, newProps: any): boolean {
        if(oldProps === newProps) {
            return false;
        }

        this.children.ErrorText.setProps(newProps);
        return true;
    }



    render(): string {
        return `
        <div>
           <p>           
            <label for="Password">{{label}}</label>    
            {{{ InputField }}} 
            {{{ ErrorText }}}    
            
        
           </p>
         </div>
         `
    }
}

export default InputPassword;
