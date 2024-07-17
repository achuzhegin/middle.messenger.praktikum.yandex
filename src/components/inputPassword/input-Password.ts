import Block from "../../core/Block";
import {InputField} from "../input";
 import {ErrorText} from "../input";
// import ErrorText from "./error-text";


type tProps = {
    onBlur: (e: Event) => void,
    events?: {
        Blur: (e: Event) => void 
    },
    InputField?:InputField,
    ErrorText?:ErrorText,
    
    
}
type tElement= {
   
    
}

class InputPassword extends Block<tProps,tElement> {
    
    constructor(props:tProps) {
        super({
            ...props,
            InputField: new InputField({...props,
                events: {
                    blur: props.onBlur || (() => { })
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

        this.children.ErrorText!.setProps(newProps);
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
