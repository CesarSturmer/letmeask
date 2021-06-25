import { FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from "../components/Button";
import { ButtonDarkMode } from "../components/ButtonDarkMode";
import { RoomCode } from '../components/RoomCode'
import logo from '../assets/images/logo.svg'


import '../styles/rooom.scss'
import { database } from '../services/firebase';

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHightlighted: boolean;
}>

type Questions ={
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHightlighted: boolean;
}

type RoomParams = {
  id: string;
}

export function Room() {

  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')
  const [questions, setQuestions] = useState<Questions[]>([])
  const [title, setTitle] = useState('')

  const roomId = params.id

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)
    roomRef.once('value', room => {
      const dataBaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = dataBaseRoom.questions ?? {}
      
      const parsedQuestion = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHightlighted: value.isHightlighted,
          isAnswered: value.isAnswered
        }
      })
      setTitle(dataBaseRoom.title)
      setQuestions(parsedQuestion);
      
    })
  }, [roomId, questions])

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()
    if (newQuestion.trim() === '') {
      return
    }

    if (!user) {
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHightlighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)

    setNewQuestion('')
  }

  return (
    <div id="page-room">
      {/* <div className="button-dark-mode">
        <ButtonDarkMode />
      </div> */}
      <header>
        <div className="content">
          <img src={logo} alt="logo" />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && questions.length <= 1 ?
          <span>{questions.length} pergunta</span> : <span>{questions.length} perguntas</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(ev) => setNewQuestion(ev.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt="avatar do usuário" />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>Para enviar uma pergunta, <button> faça seu login </button> </span>
            )}
            <Button type="submit" disabled={!user}>Enviar pergunta</Button>
          </div>
        </form>
        {JSON.stringify(questions)}
      </main>
    </div>
  )
}