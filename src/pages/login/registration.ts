
import Block from "../../core/Block"
import { FormRegistration, FormMain } from "../../components"
type tProps = {
   
    FormMain:FormMain,    
    
}
type tElement= {
    
    
}
export default class Registration extends Block<tProps,tElement> {
    constructor(props:{}) {

        super({
            ...props,
            FormMain: new FormMain({
                title: 'Вход', classMain: 'formAuthorization',
                FormContent: new FormRegistration()
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
