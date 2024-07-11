import Block from "../../core/Block"
import { FormPassword, FormMain, FormFoto } from "../../components"
export default class Password extends Block {
    constructor(props:{}) {

        super({
            ...props,
            FormMain: new FormMain({
                title: 'Андрей', classMain: 'formProfile',
                FormContent: new FormPassword({})
            }),
            FormFoto: new FormFoto({})
        })

    }

    render() {
        return `
        <main>
         {{{ FormFoto }}}
         {{{ FormMain }}}
        </main>
        `
    }
}
// formProfile formAuthorization class={{class}} 
