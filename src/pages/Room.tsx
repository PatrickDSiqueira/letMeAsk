import { useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';

import '../styles/room.scss';

type RoomParams ={
    id : string;
}

export function Room (){

    
    const  user  = useAuth;
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const RoomId = params.id;

    async function handleSendQuestion() {
        if (newQuestion.trim() === ''){
            return;
        }
        if(!user){
            throw new Error('You must be logged in');
        }
        const question = {
            content : newQuestion,
            author : {
                name : user.name,
            }
        }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={RoomId!}/>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala Teste</h1>
                    <span>5 Perguntas</span>
                </div>
                <form action="">
                    <textarea placeholder='O que Você quer perguntar??'
                    onChange={event => setNewQuestion(event.target.value)}
                    value = {newQuestion}/>
                    <div className="form-footer">
                        <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        <Button type='submit'>Enviar pergunta</Button>
                    </div>
                </form>
            </main>
        </div>
    );
}