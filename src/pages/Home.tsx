import { Navigate, useNavigate } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustration from '../assets/images/illustration.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import logo from '../assets/images/logo.svg'

import {Button} from '../components/Button'

import '../styles/auth.scss'

export function Home(){
    const navigate = useNavigate();

    function handleCreateRoom(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(result => {
            console.log(result); 
            navigate('/rooms/new');
        });

    }
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
                     <button className='create-room' onClick={ handleCreateRoom }>
                       <img src={googleIconImg} alt="Logo do Google" />
                       Crie sua sala com o Google
                     </button>
                     <div className='separator'>ou entre em uma sala</div>
                     <form action="">
                         <input type="text" placeholder='Digite o código da sala ' />
                         <Button type='submit'>Entrar na sala</Button>
                     </form>
                 </div>
             </main>
        </div>
    )
}