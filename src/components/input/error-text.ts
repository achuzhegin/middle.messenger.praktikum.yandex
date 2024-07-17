import Block from "../../core/Block";
type tProps= {
    
}

type tElement = {
    input: HTMLLabelElement
}

class ErrorText extends Block<tProps,tElement> {
    //@ts-ignore
    render(): string {
        return (`
            <div class="text-error">{{errorLabel}}</div>
        `)
    }
}

export default ErrorText
