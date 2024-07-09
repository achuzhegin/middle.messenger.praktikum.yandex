import Block from "../../../core/Block";
import { InputField } from "../../input";
import { labelField } from "../../input";
import { ErrorText } from "../../input";

// import ErrorText from "./error-text";

interface Ref {
    type: string,
    name:string,
    id?: string,
    class: string,
    label?: string,
    onBlur?: (e: Event) => void,
    events?: {
        onBlur: (e: Event) => void
    }
    
}

class InputElement extends Block {
    constructor(props:Ref) {
        super({
            ...props,
            InputField: new InputField({...props,
                events: {
                    blur: props.onBlur || (() => { })
                },
                type: props.type, name: props.name, id: props.id

            }),
            ErrorText: new ErrorText({
                error: false, errorLabel: ''
            }),
            labelField: new labelField({
                ...props, classlabel: 'label-authorization'
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
           
           <div class="column-authorization-2">                       
                {{{ labelField }}}  
                {{{ InputField }}}                
            
             <p> 
              {{{ ErrorText }}}    
             </p>        
        </div>        
         `
    }
}

export default InputElement;