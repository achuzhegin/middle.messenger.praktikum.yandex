import Block from "../../core/Block";


import { FormProfile, FormMain, FormFoto } from "../../components"
type tProps = {
   
    FormMain:FormMain,    
    FormFoto:FormFoto
}
type tElement= {
    
    
}
export default class Profile extends Block<tProps,tElement>  {
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
