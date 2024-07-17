import Block from "../../core/Block.ts";
import { InputElement } from "./input";
import { ButtonSubmit } from "../button/index.ts";
import * as Pages from '../../pages/index.ts';


type tProps = {
    
    Message:InputElement,
    ButtonEnter:ButtonSubmit
    
    
}
type tElement= {
   
    
}



export default class FormChat extends Block<tProps,tElement> {
    tr:{}={};
    // constructor(props:Ref) {

    //     super({}) 
    //     }
    init() {

        const onChangeMessageBind = this.onChangeMessage.bind(this);

        const Message:InputElement = new InputElement({ type: 'textarea', name: 'message', id: 'message', class: 'textarea', onBlur: onChangeMessageBind });


        const ButtonProfileBind = this.onButtonProfile.bind(this);
        const ButtonEnter:ButtonSubmit= new ButtonSubmit({ class: 'btn-profile', heading: 'Профиль', type: 'button', href: '', onSubmit: ButtonProfileBind });




        this.children = {
            ...this.children,
            Message,
            ButtonEnter,


        }
    }

    onChangeMessage(e: Event) {
        if (e.target == null) {
            return;
        }
        
    }



    onButtonProfile(e: Event) {
        e.preventDefault();
        const app = document.getElementById('app')!;

        //@ts-ignore
        const Component = Pages.Profile;
        const component = new Component(this.tr);

        app.innerHTML = '';
        app.append(component.getContent()!);
        // debugger;

    }







    render() {
        return (`
        <div>
           <div class="container-chat">
               <nav class="profile">
                   {{{ ButtonEnter }}}                 
               </nav>
                <form class="" name="" action="" method="get">
                    <input class="" type="text" placeholder="Поиск">
                </form>
                <form class="row-chat" name="name_1" action="" method="get">
                     <div class="circle"> </div>
                    <div class="item-chat-1">
                    <div>
                        <p class="bold">Андрей</p>
                        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                            inventore. Velit consectetur excepturi quam, reiciendis, ullam veniam sunt cum quaerat
                            minima nostrum similique odio at quo amet ut, dolore atque.</p>
                    </div>
                    </div>
                    <div class="item-chat-2">
                        <p class="description">10:49</p>
                    </div>

                </form>
           </div>
         
            <div class="container-chat-2">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium doloribus mollitia totam aliquid,
                aperiam quasi, consectetur, ratione doloremque nemo officia suscipit enim provident ipsam. Omnis quae vero
                  aut obcaecati.
            </div>
            <form class="massage" name="" action="" method="get">
               {{{Message}}}
             </form>
        </div>
       
        `)
    }
}
