import Block from "../../core/Block"
import { FormChat } from "../../components"
export default class Chat extends Block {
    constructor(props:{}) {

        super({
            ...props,
            FormMain: new FormChat({              
            })
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
