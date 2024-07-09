import Block from "../../core/Block"
export default class FormMain extends Block {
    //@ts-ignore
    constructor(props) {       

        super(props)
    }

    render() {
        return(`
            <section>    
                <form class={{classMain}}  name="contactForm" action="" method="post">
                    <h2 class="heading">{{title}}</h2>   
                    {{{ FormContent }}}                 
                </form>
            </section>
         `)
    }
}

// formProfile formAuthorization class={{class}} classMain: 'formProfile'