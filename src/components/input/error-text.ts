import Block from "../../core/Block";

class ErrorText extends Block {
    //@ts-ignore
    render(): string {
        return (`
            <div class="text-error">{{errorLabel}}</div>
        `)
    }
}

export default ErrorText
