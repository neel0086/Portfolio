
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './Container/features/userSlice'
import { auth, db, provider } from './firebase'
import './Login.css'
function Login() {
  const dispatch = useDispatch()
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                uuid:user.uid,
                photoUrl:user.photoURL
            }))
        })
        
      }
  
  return (
    <div className="login">
            <img />
            <h1>Hi buddy! <span class="wave">👋</span></h1> 
        <button  color="primary" onClick={signIn}>Login</button>
    </div>
  )
}

export default Login