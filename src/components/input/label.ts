import Block from "../../core/Block";
type tProps= {
    
}

type tElement = {
    input: HTMLLabelElement
}

class labelField extends Block<tProps, tElement> {
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
