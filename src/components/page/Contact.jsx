import { useState } from 'react'
import '../../styles/page/Contact.scss'
import '../../styles/common/common.scss'

export default function Contact({ maxWidth = '100%' }) {

  const initial = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const [person, setPerson] = useState(initial)

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  const send = () => {
    setPerson(initial)
  }

  return (
    <div className='contact-container' id='Contact' style={{ maxWidth: `${maxWidth}` }}>
      <h1 className='page-title'>Contact</h1>

      <div className='contact-content'>
        <div className='info-text'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque unde aspernatur odio, minima explicabo impedit, dolorem animi, eius fugit inventore doloremque voluptas soluta totam cumque ducimus delectus mollitia placeat!</p>
        </div>

        <div className='contact-field'>
          <h4>Send your message</h4>
          <div className='flex-parent'>

            <div className='input-field'>
              <label htmlFor="name">Your Name</label><br />
              <input type="text" name="name" value={person.name} onChange={handleChange} /><br />
            </div>
            <div className='input-field'>
              <label htmlFor="email">Your Email</label><br />
              <input type="email" name="email" value={person.email} onChange={handleChange} /><br />
            </div>
          </div>

          <div className=''>
            <label htmlFor="subject">Subject</label><br />
            <input type="text" name="subject" value={person.subject} onChange={handleChange} /><br />
          </div>
          <div className=''>
            <label htmlFor="message">Message</label><br />
            <textarea type="text" name="message" value={person.message} onChange={handleChange} /><br />
          </div>
          <div>
            <button onClick={send}>Send Message</button>
          </div>

        </div>
      </div>
    </div>

  )
}
