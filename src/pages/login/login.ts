
import Block from "../../core/Block"
import { FormLogin, FormMain } from "../../components"
export default class Login extends Block {
    constructor(props:{}) {

        super({
            ...props,
            FormMain: new FormMain({
                title: 'Вход', classMain: 'formAuthorization',
                FormContent: new FormLogin({})
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
