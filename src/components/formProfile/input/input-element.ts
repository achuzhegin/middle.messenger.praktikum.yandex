import Block from "../../../core/Block";
import { InputField } from "../../input";
import { labelField } from "../../input";
import { ErrorText } from "../../input";

// import ErrorText from "./error-text";



class InputElement extends Block {
    //@ts-ignore
    constructor(props) {
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

        this.children.ErrorText.setProps(newProps);
        return true;
    }



    render(): string {
        return ` 
        
           <div class="row">  
                 <div class="column-profile-2">            
                {{{ labelField }}} 
                 </div> 
                 <div class="column-profile-2">    
                {{{ InputField }}}  
                 </div> 
                {{{ ErrorText }}}     
            </div>             
          
                   
              
         `
    }
}

export default InputElement;