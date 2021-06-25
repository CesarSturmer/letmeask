import { FormEvent, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '../components/Button'
import logoImg from '../assets/images/logo.svg'
import illustration from '../assets/images/illustration.svg'
import { ButtonDarkMode } from '../components/ButtonDarkMode'
import '../styles/auth.scss'
import { database } from '../services/firebase'


export function NewRoom() {

  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent ) {
    event.preventDefault()

    if(newRoom.trim() === ''){
      return 
    }

    //vai ter uma categoria chamada rooms ref a coluna ? tabela ? 
    const roomRef = database.ref('rooms')
    
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })
    history.push(`/rooms/${firebaseRoom.key}`)   
  }

  return (
    <div id="page-auth">

      <aside>
        <img src={illustration} alt="ilustração de perguntas e respostas" />
        <strong>Crie salas de Q&A ao-vivo</strong>
        <p>Tire as dúvidas da sua aundiência em tempo real</p>
      </aside>

      <main >
        <div className="main-content">
          <img src={logoImg} alt="Logo" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(ev) => setNewRoom(ev.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar Sala</Button>

          </form>
          <p>
            Quer entrar em uma sala existente ? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
      <div className="button-dark-mode">
        <ButtonDarkMode />
      </div>
    </div>
  )
}