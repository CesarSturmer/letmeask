import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import logoImg from '../assets/images/logo.svg'
import illustration from '../assets/images/illustration.svg'

import '../styles/auth.scss'


export function NewRoom() {

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
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">Criar Sala</Button>

          </form>
          <p>
            Quer entrar em uma sala existente ? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}