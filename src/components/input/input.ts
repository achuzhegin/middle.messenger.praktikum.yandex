import Block from "../../core/Block";

class InputField extends Block {
    // //@ts-ignore
    // constructor(props) {
    //     super(props)
    // }
    render(): string {
        return (`            
        <input class={{class}} type = {{type}}  name = {{name}} id = {{id}} placeholder = ""/> 
            
        `)
    }
}

export default InputField;
