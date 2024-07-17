//@ts-ignore
import Block from "../../core/Block"
type tProps = {
   
    
}
type tElement= {
    
    
}
export default class FormFoto extends Block<tProps,tElement>  {
    
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
