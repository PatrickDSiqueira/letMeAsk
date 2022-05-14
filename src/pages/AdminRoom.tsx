import { useNavigate, useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';

import '../styles/room.scss';
import { database } from '../services/firebase';

type RoomParams ={
    id : string;
}

export function AdminRoom (){

    // const  user  = useAuth().user;
    const navigate = useNavigate();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    

    const { title,questions} = useRoom(roomId!);

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        })
        navigate('/');
    }



    async function handleDeleteQuestion(questionsId :string){
        if(window.confirm("Você tem certeza que quer excluir essa pergunta?")){
            await database.ref(`rooms/${roomId}/questions/${questionsId}`).remove();
        }
    }

    async function handleCheckQuestionAsAnswered(questionsId :string) {
        await database.ref(`rooms/${roomId}/questions/${questionsId}`).update({
            isAnswered : true,
        });
    }
    
    async function handleHighLigthQuestion(questionsId :string) {
        await database.ref(`rooms/${roomId}/questions/${questionsId}`).update({
            isHighlighted : true,
        });
    }


    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div >
                    <RoomCode code={roomId!}/>
                    <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 &&  <span>{questions.length} Pergunta(s)</span>}
                </div>

                <div className="question-list">
                {questions.map(questions=>{
                    return(
                        <Question 
                        key={questions.id}
                        content={questions.content} 
                        author={questions.author} 
                        isAswered={questions.isAnswered}
                        IsHighlighted ={questions.isHighlighted}
                        >
                        
                        {!questions.isAnswered && (
                            <>
                            <button
                                type='button'
                                onClick={()=> handleCheckQuestionAsAnswered(questions.id)}
                            >
                                <img src={checkImg} alt="MArcar pergunta como respondida" />
                            </button>

                            <button
                                type='button'
                                onClick={()=> handleHighLigthQuestion(questions.id)}
                            >
                                <img src={answerImg} alt="Dar destaque a pergunta" />
                            </button>
                            </>
                        )}
                        
                        <button
                        type='button'
                        onClick={()=> handleDeleteQuestion(questions.id)}
                        >
                                <img src={deleteImg} alt="Remover Pergunta" />
                        </button>
                        </Question>
                    )
                })}
                </div>
            </main>
        </div>
    );
}

// algoritmo de reconciliação