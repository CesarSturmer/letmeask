import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useTheme } from '../hooks/theme';

import illustration from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import { ButtonDarkMode } from '../components/ButtonDarkMode'

import '../styles/auth.scss'


export function Home() {
  const history = useHistory()
  const { theme } = useTheme();
  const { user, signInWithGoogle } = useAuth()

  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }
    
    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exists')
      return
    }

    history.push(`/rooms/${roomCode}`)
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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digete o código da sala"
              onChange={(ev) => setRoomCode(ev.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>

          </form>
        </div>


      </main>
      <div className="button-dark-mode">
        <ButtonDarkMode />
      </div>
    </div>
  )
}