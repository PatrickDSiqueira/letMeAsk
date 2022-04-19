import {useContext} from 'react';
import { Link } from 'react-router-dom';
import illustration from '../assets/images/illustration.svg';
import logo from '../assets/images/logo.svg';
import {Button} from '../components/Button';

import '../styles/auth.scss';
import {TestContext} from '../App';

export function NewRoom(){
    const {value, setValue} = useContext(TestContext);
    return(
        <div id='page-auth'>
             <aside>
                 <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
                 <strong>Crie salas de Q&amp;A ao-vivo</strong>
                 <p>Tire as dúvidas da sua audiência em tempo-real</p>
             </aside>
             <main>
                 <div className='main-content'>
                     <img src={logo} alt="letmeask" />
                     <h2>Crie uma nova sala</h2>
                     <form>
                         <input type="text" placeholder='Nome da sala' />
                         <Button type='submit'>Criar sala</Button>
                     </form>
                     <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
                      
                 </div>
             </main>
        </div>
    )
}