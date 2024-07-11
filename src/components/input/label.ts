import Block from "../../core/Block";

class labelField extends Block {
    //@ts-ignore
    // constructor(props) {
    //     super(props)
    // }
    render(): string {
        return (`            
           <label class={{classlabel}} for={{name}}>{{label}}</label>  
            
        `)
    }
}

export default labelField;
