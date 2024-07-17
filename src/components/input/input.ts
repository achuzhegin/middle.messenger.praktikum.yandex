import Block from "../../core/Block";

interface tProps {
    type: string,
    name:string,
    id: string,
    onBlur: (e: Event) => void,
   
    
    events: {
        blur: (e: Event) => void 
    },
    input?: HTMLInputElement
}

type tElement = {
    
    input: HTMLInputElement
}
class InputField extends Block<tProps,tElement> {
    
    constructor(props:tProps) {
        super(props)
    }
    
    render(): string {
        return (`            
        <input class={{class}} type = {{type}}  name = {{name}} id = {{id}} placeholder = ""/> 
            
        `)
    }
}

export default InputField;
