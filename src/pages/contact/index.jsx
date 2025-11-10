import Contact from '@/components/contact/Contact'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import React from 'react'

const index = () => {
  return (
    <div style={{position:"relative", zIndex:"2"}}>
   <ContactForm/>
   {/* <Contact/> */}
   <ContactInfo/>
    </div>
  )
}

export default index