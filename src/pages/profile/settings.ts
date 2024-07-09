import Block from "../../core/Block"
import { FormSetting, FormMain, FormFoto } from "../../components"
export default class Setting extends Block {
    constructor(props:{}) {

        super({
            ...props,
            FormMain: new FormMain({
                title: 'Андрей', classMain: 'formProfile',
                FormContent: new FormSetting({})
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