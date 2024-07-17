import Block from "../../../core/Block";
import { InputField } from "../../input";
import { labelField } from "../../input";
import { ErrorText } from "../../input";

// import ErrorText from "./error-text";


interface tProps  {
    type: string,
    name:string,
    id: string,
    class: string,
    label?: string,
    onBlur: (e: Event) => void,
    events?: {
        Blur: (e: Event) => void 
    },
    // input: HTMLInputElement,
    InputField?:InputField,
    ErrorText?:ErrorText,
    labelField?:labelField
    
}
type tElement= {
    // InputField:InputField,
    // ErrorText:ErrorText,
    // labelField:labelField
}

class InputElement extends Block<tProps,tElement> {
    
    constructor(props:tProps) {
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
                ...props, classlabel: 'label-profile'
            })
        })
    }
    componentDidUpdate(oldProps: any, newProps: any): boolean {
        if (oldProps === newProps) {
            return false;
        }

        this.children.ErrorText!.setProps(newProps);
        return true;
    }



    render(): string {
        return `        
           <div>    
                {{{ InputField }}}  
           </div> 
          
                   
              
         `
    }
}

export default InputElement;
