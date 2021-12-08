import { createContext, useState } from 'react'

import {

  BrowserRouter,

  Routes,

  Route

} from "react-router-dom";

import { Home } from "./pages/Home";

import { NewRoom } from "./pages/NewRoom";

import { auth, firebase } from './services/firebase'

type AuthContextType = {

  user: User | undefined;

  signInWithGoogle: () => void;

}

type User = {

  id: string;

  name: string;

  avatar: string;

}



export const AuthContext = createContext({} as AuthContextType)

function App() {

  const [ user, setUser ] = useState<User>();

  function SignInWithGoogle() {

    const provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(provider).then(result => {
      
      if (result.user) {

        console.log(result)

        const { displayName, photoURL, uid } = result.user

        if ( !displayName || !photoURL ) {

          throw new Error('Missing information from Google account')

        }

        setUser({

          id: uid,

          name: displayName,

          avatar: photoURL

        })

      }

    
    })

  }

  return (

    <BrowserRouter>


      <Routes>
      
        <AuthContext.Provider value={{ user, SignInWithGoogle }}>
          
          <Route path="/" element={< Home />} />

          <Route path="/rooms/new" element={< NewRoom />} />

        </AuthContext.Provider>
      
      </Routes>


    </BrowserRouter>

    

  );

}

export default App;