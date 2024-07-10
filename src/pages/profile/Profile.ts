import Block from "../../core/Block";


import { FormProfile, FormMain, FormFoto } from "../../components"
export default class Profile extends Block {
    constructor(props:{}) {

        super({
            ...props,
            FormMain: new FormMain({
                title: 'Андрей', classMain: 'formProfile',
                FormContent: new FormProfile({})
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
