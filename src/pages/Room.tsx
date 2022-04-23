import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import '../styles/room.scss';

export function Room (){
    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode/>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala Teste</h1>
                    <span>5 Perguntas</span>
                </div>
                <form action="">
                    <textarea placeholder='O que Você quer perguntar??'/>
                    <div className="form-footer">
                        <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        <Button type='submit'>Enviar pergunta</Button>
                    </div>
                </form>
            </main>
        </div>
    );
}