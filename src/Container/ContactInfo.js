import React ,{useState}from 'react'
import './ContactInfo.css'
import { useForm } from 'react-hook-form';
import { db } from '../firebase.js'
import firebase from '@firebase/app-compat';


function ContactInfo() {
  const {handleSubmit,register,reset }=useForm();
  const [input,setInput] = useState('')
  const onSubmit = (PersonData) => {
    db.collection('Messages').add(
      {
      Name:PersonData.Name,
      Email:PersonData.Email,
      Country:PersonData.Country,
      Country:PersonData.Phone_number,
      Mssg:PersonData.Mssg,
      TimeStamp:firebase.firestore.FieldValue.serverTimestamp(),
    }
    )
    reset()
  };
  return (
    
      <section>
        <div className="ContactMain">
          <div className="Contactdetail">
            <div>
              <h2>Get In Touch</h2>
              <ul class="Info">
                <li>
                  <span><i class="fas fa-map-marker-alt" style={{verticalAlign:"middle"}}/></span>
                  <span className="personal">India,Gujarat,Vadodara</span>
                </li>
                <li>
                  <span><i class="fas fa-envelope" style={{verticalAlign:"middle"}}/></span>
                  <span className="personal">neelmehta0086@gmail.com</span>
                </li>
                <li>
                  <span><i class="fab fa-linkedin-in" style={{verticalAlign:"middle"}}/></span>
                  <span className="personal">LinkedIN</span>
                </li>

                <li>
                  <a>
                  <span><i class="fab fa-instagram" style={{verticalAlign:"middle"}}/></span>
                  <span className="personal">Instagram</span>
                  </a>
                </li>
                <li>
                  <span><i class="fab fa-github" style={{verticalAlign:"middle"}}/></span>
                  <span className="personal">Github</span>
                </li>
              </ul>
            </div>
          </div>
            <div className="SendMssg">
              <h2>Drop A Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} spellCheck="false">
              <div className="FormBox">
              <div class="textbox i1"><input type="name" placeholder="Name" {...register('Name', { required: true })}/></div>
                <div value={input}
                    onChange={(e) => setInput(e.target.value)} class="textbox i1"><input type="Country" placeholder="Country" {...register('Country', { required: true })}/></div>
                
                <div class="textbox i1"><input type="email" placeholder="Email"{...register('Email', { required: true })}/></div>
                <div class="textbox i1"><input type="text" placeholder="Phone no." {...register('Phone_number', { required: true })}/></div>
                <div class="textbox i2"><textarea placeholder="Type a mssg..." {...register('Mssg', { required: true })}></textarea></div>
                <div className="textbox i2">
                  <input type="submit"></input>
                  
                </div>
                </div>
              </form>
              
            </div>
          
        </div>
      </section>
      
    
  )
}

export default ContactInfo
