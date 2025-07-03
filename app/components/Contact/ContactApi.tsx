import React from 'react'
import axios from 'axios'
import ContactForm from './ContactForm'

const ContactApi = async () => {
    const res1 = await axios.get("http://localhost:8000/api/contact");
    const ContactInfo = res1.data;
    const res2 = await axios.get("http://localhost:8000/api/soci");
    const SociAcc = res2.data;
    console.log(ContactInfo)
    console.log(SociAcc)
    
    
    return <ContactForm ContactData={ContactInfo} SociData={SociAcc} />

  
}

export default ContactApi

