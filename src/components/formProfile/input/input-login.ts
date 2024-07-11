import Block from "../../../core/Block";
import { InputField } from "../../input";
import { labelField } from "../../input";
import { ErrorText } from "../../input";

// import ErrorText from "./error-text";



class InputLogin extends Block {
    //@ts-ignore
    constructor(props) {
        super({
            ...props,
            InputField: new InputField({
                events: {
                    blur: props.onBlur || (() => { })
                },
                type: 'text', name: 'login', id: 'login'

            }),
            ErrorText: new ErrorText({
                error: false, errorLabel: ''
            }),
            labelField: new labelField({
                name: 'login', label: 'Логин'
            })
        })
    }
    componentDidUpdate(oldProps: any, newProps: any): boolean {
        if (oldProps === newProps) {
            return false;
        }

        this.children.ErrorText.setProps(newProps);
        return true;
    }



    render(): string {
        return ` 
        <div class="row">                
            {{{ labelField }}}            
            {{{ InputField }}}            
        </div>     
            
        
         `
    }
}

export default InputLogin;
