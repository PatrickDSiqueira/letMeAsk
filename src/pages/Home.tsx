import illustration from '../assets/images/illustration.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import logo from '../assets/images/logo.svg'



export function Home(){
    return(
        <div>
             <aside>
                 <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
                 <strong>Crie salas de Q&am;A ao-vivo</strong>
                 <p>Tire as dúvidas da sua audiência em tempo-real</p>
             </aside>
             <main>
                 <div>
                     <img src={logo} alt="letmeask" />
                     <button>
                       <img src={googleIconImg} alt="Logo do Google" />
                       Crie sua sala com o Google
                     </button>
                     <div>ou entre em uma sala</div>
                     <form action="">
                         <input type="text" placeholder='Digite o código da sala ' />
                         <button type='submit'>Entrar na sala</button>

                     </form>
                      
                 </div>
             </main>
        </div>
    )
}