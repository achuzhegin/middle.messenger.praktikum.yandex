
import Block from "../../core/Block"
import { FormRegistration, FormMain } from "../../components"
export default class Registration extends Block {
    constructor(props:{}) {

        super({
            ...props,
            FormMain: new FormMain({
                title: 'Вход', classMain: 'formAuthorization',
                FormContent: new FormRegistration({})
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
// formProfile formAuthorization class={{class}} 
