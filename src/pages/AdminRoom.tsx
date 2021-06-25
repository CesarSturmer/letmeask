import { useHistory, useParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from "../components/Button/index";
import { ButtonDarkMode } from '../components/ButtonDarkMode.tsx/';
import { RoomCode } from '../components/RoomCode/index'
import logo from '../assets/images/logo.svg'
import deleteImg from '../assets/images/delete.svg'


import '../styles/rooom.scss'
import { database } from '../services/firebase';
import { Questions } from '../components/Questions';
import { useRoom } from '../hooks/useRoom';


type RoomParams = {
  id: string;
}

export function AdminRoom() {

  const history = useHistory()
  const { user } = useAuth()
  const params = useParams<RoomParams>()

  const roomId = params.id

  const { questions, title } = useRoom(roomId)

  async function handleEndRoom() {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })
    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
   if( window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
     await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
   }
  }

  return (
    <div id="page-room">
      {/* <div className="button-dark-mode">
        <ButtonDarkMode />
      </div> */}
      <header>
        <div className="content">
          <img src={logo} alt="logo" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutline onClick={handleEndRoom}>Encerar Sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && questions.length <= 1 ?
            <span>{questions.length} pergunta</span> : <span>{questions.length} perguntas</span>}
        </div>       

        <div className="question-list">
          {questions.map((item) => {
            return (
              <Questions
                key={item.id}
                content={item.content}
                author={item.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(item.id)}
                >
                  <img src={deleteImg} alt="remover pergunta" />

                </button>
              </Questions>
            )
          })}
        </div>
      </main>
    </div>
  )
}