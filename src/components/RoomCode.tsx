import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss'
export function RoomCode(){
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>SAla 84548</span>
        </button>
    )

}