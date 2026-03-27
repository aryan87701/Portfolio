import React from 'react'
import Form from './Form'
import bgContact from '../assest/bgContact.avif'
const Contact = () => {
  return (
    <div className='' id='contact' style={{
       backgroundImage: `url(${bgContact})`,
         backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position:"relative",

    }}>
        <div className='flex justify-center items-center h-screen'>
             <Form/>
        </div>
       
    </div>
  )
}
export default Contact
