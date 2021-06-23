import { useHistory } from 'react-router-dom'
import { auth, firebase } from '../services/firebase'

import illustration from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Header } from '../components/Header'
import { Button } from '../components/Button'

import '../styles/auth.scss'


export function Home() {
  const history = useHistory()


  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(provider).then(result => {
      console.log(result);
      
    })


    // history.push('/rooms/new')
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
          <form>
            <input
              type="text"
              placeholder="Digete o código da sala"
            />
            <Button type="submit">Entrar na sala</Button>

          </form>
        </div>

      </main>
    </div>
  )
}