import { useContext } from 'react'

import illustrationImg from '../assets/images/illustration.svg'

import logoImg from '../assets/images/logo.svg'

import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'

import { Button } from '../components/Button/Button'

import {useNavigate } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import { AuthContext } from '../App'



export function Home() {

  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext)

  function handleCreateRoom() {

    navigate('/rooms/news')

  }

  return (

    <div id="page-auth">

      <aside>

        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />

        <strong>Crie salas de Q&amp;A ao-vivo</strong>

        <p>Tire duvidas da sua audiencia em tempo-real</p>


      </aside>
        
        <main>

          <div className="main-content">

            <img src={logoImg} alt="Letmeask" />

            <button onClick={handleCreateRoom} className="create-room">

              <img src={googleIconImg} alt="Icone logo da Google" />

              Crie sua sala com o Google

            </button>

            <div className="separator">Ou entre em alguma sala</div>

            <form>

              <input 
                
                type="text"
                
                placeholder="Digite o código da sala"
                
              />

              <Button type="submit">

                Entrar na sala

              </Button>
            
            </form>

          </div>

        </main>

    </div>

  )

}