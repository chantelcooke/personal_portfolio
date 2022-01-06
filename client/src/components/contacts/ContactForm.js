import { useState, useEffect } from 'react';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({ name: '', phone: '', email: '', comment: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addContact(contact)
    setContact({ name: '', phone: '', email: '', comment: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          name='name'
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          required
        />
        <label>Phone Number:</label>
        <input
          name='phone'
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          required
        />
        <label>Email:</label>
        <input 
          name='email'
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          required
        />
        <label>Message:</label>
        <textarea
          name='comment'
          value={contact.comment}
          onChange={(e) => setContact({ ...contact, comment: e.target.value })}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm;