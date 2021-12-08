import { useContext } from 'react'

import illustrationImg from '../assets/images/illustration.svg'

import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss'

import { Button } from '../components/Button/Button'

import { Link } from 'react-router-dom'

import { AuthContext } from '../App'

export function NewRoom() {

  const { user, setUser } = useContext(AuthContext)

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

            <h2>Criar uma nova sala</h2>

            <form>

              <input 
                
                type="text"
                
                placeholder="Nome da sala"
                
              />

              <Button type="submit">

                Criar sala

              </Button>
            
            </form>

            <p>

                Quer entrar em uma sala ja existente? <Link to="/">Clique aqui!</Link>

            </p>

          </div>

        </main>

    </div>

  )

}