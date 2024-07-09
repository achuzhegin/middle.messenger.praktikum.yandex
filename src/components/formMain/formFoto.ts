//@ts-ignore
import Block from "../../core/Block"
export default class FormFoto extends Block {
    
    // constructor(props) {       

    //     super(props)
    // }

    render() {
        return(`
            <section>    
                <form class="formProfile" name="foto" action="" method="post">
                   <div class="foto">
                        <img src="static\img\Union.svg" alt="" />
                    </div>
                </form>
            </section>
         `)
    }
}