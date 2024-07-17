import Block from "../../core/Block";
interface tProps {
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


type tElement = {
   
}

class ButtonSubmit extends Block<tProps,tElement> {
    
    constructor(props: tProps) {
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
