//@ts-nocheck
import Handlebars from 'handlebars';
import * as Pages from './pages';
import * as Components from './components'


const pages = {  
  'startlist': [ Pages.startlist ],
  'login': [ Pages.login ],
  'profile': [ Pages.Profile ],
  'setting': [ Pages.Setting ],
  'password': [ Pages.Password ],
  'registration': [ Pages.Registration ],
  'error404': [ Pages.Error404 ],
  'error500': [ Pages.Error500 ],
  'chat': [ Pages.Chat ],
  
  

 
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
  if(source instanceof Object) {
    const page = new source(context);
    container.innerHTML = '';
    container.append(page.getContent());
    // page.dispatchComponentDidMount();
    return;
  }
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('startlist'));
    // document.addEventListener('DOMContentLoaded', () => navigate('login'));
    // document.addEventListener('DOMContentLoaded', () => navigate('profile'));
  //  document.addEventListener('DOMContentLoaded', () => navigate('setting'));
    // document.addEventListener('DOMContentLoaded', () => navigate('password'));
    //  document.addEventListener('DOMContentLoaded', () => navigate('registration'));
      // document.addEventListener('DOMContentLoaded', () => navigate('chat'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});


