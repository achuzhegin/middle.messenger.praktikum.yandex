import Block from "../../core/Block"
import { FormChat } from "../../components"
type tProps = {
   
    FormMain?:FormChat,
    
    
    
}
type tElement= {
    
    
}
export default class Chat extends Block<tProps,tElement> {
    constructor(props:tProps) {

        super({
            ...props,
            FormMain: new FormChat()
        })

    }

    render() {
        return `
        <main>
        {{{ FormMain }}}
        </main>
        `
    }
}
