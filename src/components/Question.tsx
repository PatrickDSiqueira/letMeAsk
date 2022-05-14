import { ReactNode} from 'react';
import cx from 'classnames';

import '../styles/question.scss';

type QuestionProps = {
    content : string;
    author:{
        name: string;
        avatar:string;
    }
    children?: ReactNode;
    isAswered?: boolean;
    IsHighlighted?:boolean;
}

export function Question({
    content,
     author,
     isAswered=false,
     IsHighlighted=false,
     children,
}: QuestionProps){
    return(
        <div className= {cx('question', 
            {answered: isAswered}, 
            {Highlighted: IsHighlighted && !isAswered})}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>{children}</div>
            </footer>
        </div>

    );
}