import { ReactNode } from 'react'

import cx from 'classnames'
import './style.scss'


type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isHightlighted?: boolean,
  isAnswered?: boolean,
}

export function Questions({
  content,
  author,
  children,
  isHightlighted = false,
  isAnswered = false,
}: QuestionsProps) {

// cx = pacote classname pra ts. simplica a verificação para condição de classes;


  return (
    <div className={cx(
      'question', 
      {aswered: isAnswered},
      {hightlighted: isHightlighted && !isAnswered}
    )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  )
}