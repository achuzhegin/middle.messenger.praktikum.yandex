import Block from "../../core/Block";
interface Ref {
    type: string,
    class:string,
    label?: string,
    heading: string,
    href: string,
    onSubmit: (e: Event) => void,
    events?: {
        click: (e: Event) => void
    }
    
}

class ButtonSubmit extends Block {
    
    constructor(props: Ref) {
        super({
            ...props,
            events: {
                click: props.onSubmit
            }
        })
    }

    render(): string {
        return `
            <button class="{{class}}" type={{type}}  >               
                 {{ heading }}
            </button>
    
        `
    }
}

export default ButtonSubmit;
