import React, { useState,useEffect, useRef } from 'react'
import './TalkMe.css'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser} from './Container/features/userSlice';
import { auth, db } from './firebase';
import firebase from '@firebase/app-compat';

function TalkME() {
    const [open, setOpen] = useState(true);
    const [messages,setMessages] = useState([]);
    const [input,setInput] = useState('')
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    // !--------REDUX------------!
    useEffect(() => {
        auth.onAuthStateChanged(user => {
        if(user){
            dispatch(login({
            displayName:user.displayName,
            email:user.email,
            uuid:user.uid,
            photoUrl:user.photoURL

        }))
        db.collection('ChatRoom').doc(user.uid).set(
            {
            Email:user.email
            }
        )
        db.collection("ChatRoom").doc(user.uid).
        collection("Chats").orderBy("TimeStamp",'asc').onSnapshot(snapshot=>(
            setMessages(snapshot.docs.map((doc) =>
                doc.data()
            ))
        ))
        }
        
        })

    },[])


    // !-------------------Messaging------------------------!
    const ref = useRef();
    const sendmssg = (e) =>{
        e.preventDefault()
        db.collection('ChatRoom').doc(user.uuid).collection('Chats').
        add({
            Name:user.displayName,
            Mssg:input,
            TimeStamp:firebase.firestore.FieldValue.serverTimestamp(),
            Email:user.email
        })
        setInput('')
        ref.current.scrollTop = ref.current.scrollHeight;
    };

    // !----------------------ADD EMOJI---------------------!
    

  return (
    <div className="collapse">
        
        {/* !--------------------------WEB VIEW----------------------------------! */}
        <div className="web">
        <div className="chat" style={{fontSize:'18px',borderBottomLeftRadius:`${open ? '':0 }`}} onClick={() => setOpen(!open)}>
            <img src="https://avatars.dicebear.com/api/bottts/tybvvvsdsdssaaxcddssssfrevv.svg" ></img>
            <span> Chat with Admin     </span>
            <span style={{paddingLeft:'72px'}} className={`${open ? "fa fa-chevron-up" :"fa fa-chevron-down"  }`}></span>
        </div>
        <div style={{display: `${open ? "none" : "flex"}`}} className="talk">
            {!user ? (
                <Login />
            ) : (
                <div>
            <div className="chat_body" ref={ref}>
                {messages.map((message)=>(
                    <p className={`chat_mssg ${user.email==message.Email ? '' : 'admin_mssg'}`}>
                    <span className="identity">
                        {message.Name.substr(message.Name.indexOf(' ')+1)}
                    </span>
                    <span>
                    {message.Mssg}

                    </span>
                    <span className="Time">
                        {new Date(message.TimeStamp?.toDate()).toString().substring(16,21)}
                    </span>
                </p>
                ))}
                
            </div>
            
            <div className="chat_footer">
                <form>
                
                <span className="far fa-smile-beam " data-emoji-input="unicode" data-emojiable="true"></span>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    type="text"  placeholder="Type your mssg"
                    data-emoji-input="unicode" data-emojiable="true"/>
                <button onClick={sendmssg} className="fab fa-telegram-plane" />
                </form>
               
            </div>
            </div>
            )}
        </div>
        </div>


        {/*!------------------ Mobile View -------------------------!*/}
        <div className="mobile" >
        <div className={`${open ? "chat_mobile" :"chat"  }`} style={{fontSize:'18px',borderBottomLeftRadius:`${open ? '':0 }`}} onClick={() => setOpen(!open)}>
            <img src="https://avatars.dicebear.com/api/bottts/tybvvvsdsdssaaxcddssssfrevv.svg" ></img>
            <span style={{display: `${open ? "none" : "inline-block"}`}}> Chat with Admin     </span>
            <span style={{paddingLeft:'72px',display: `${open ? "none" : "inline-block"}`}} className="fa fa-chevron-down"></span>
        </div>
        
        <div style={{display: `${open ? "none" : "flex"}`}} className="talk">
            {!user ? (
                <Login />
            ) : (
                <div>
            <div className="chat_body" ref={ref}>
                {messages.map((message)=>(
                    <p className={`chat_mssg ${user.email==message.Email ? '' : 'admin_mssg'}`}>
                    <span>
                    {message.Mssg}

                    </span>
                </p>
                ))}
                
            </div>
            
            <div className="chat_footer">
                <form>
                <span className="far fa-smile-beam"/>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    type="text"  placeholder="Type your mssg"/>
                <button onClick={sendmssg} className="fab fa-telegram-plane" />
                </form>
               
            </div>
            </div>
            )}
        </div>
        </div>
    </div>
  )
}




export default TalkME
