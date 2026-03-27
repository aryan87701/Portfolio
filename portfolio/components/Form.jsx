import React from 'react';
import styled from 'styled-components';

import axios from 'axios'
const handleSubmit = async(e)=>{
  e.preventDefault()

  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value
  };

  axios.post('http://localhost:4000/contact',data)
  .then(()=>{
    alert("Message sent successfully")
    e.target.reset()
  })
  }

const Form = () => {
  return (
    <StyledWrapper>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <span className="heading">Get in touch</span>
          <input name='name' placeholder="Name" type="text" className="input" />
          <input name='email' placeholder="Email" id="mail" type="email" className="input" />
          <textarea name='message' placeholder="Say Hello" rows={10} cols={30} id="message" name="message" className="textarea" defaultValue={""} />
          <div className="button-container">
            <button className="send-button" type='submit'>Send</button>
            <div className="reset-button-container">
              <div id="reset-btn" className="reset-button">Reset</div>
            </div>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .orange {
    color: #ff7a01;
  }

  .form-container {
    max-width: 700px;
    margin: 30px;
    background-color:#2d0303;;
    padding: 30px;
    border-left: 5px solid #ff7a01;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
  }

  .heading {
    display: block;
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .form-container .form .input {
    color: #87a4b6;
    width: 100%;
    background-color: #002733;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border-left: 1px solid transparent;
  }

  .form-container .form .input:focus {
    border-left: 5px solid #ff7a01;
  }

  .form-container .form .textarea {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #013747;
    color: #ff7a01;
    font-weight: bold;
    resize: none;
    max-height: 150px;
    margin-bottom: 20px;
    border-left: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .textarea:focus {
    border-left: 5px solid #ff7a01;
  }

  .form-container .form .button-container {
    display: flex;
    gap: 10px;
  }

  .form-container .form .button-container .send-button {
    flex-basis: 70%;
    background: #ff7a01;
    padding: 10px;
    color: #001925;
    text-align: center;
    font-weight: bold;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .button-container .send-button:hover {
    background: transparent;
    border: 1px solid #ff7a01;
    color: #ff7a01;
  }

  .form-container .form .button-container .reset-button-container {
    filter: drop-shadow(1px 1px 0px #ff7a01);
    flex-basis: 30%;
  }

  .form-container .form .button-container .reset-button-container .reset-button {
    position: relative;
    text-align: center;
    padding: 10px;
    color: #ff7a01;
    font-weight: bold;
    background: #001925;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .button-container .reset-button-container .reset-button:hover {
    background: #ff7a01;
    color: #001925;
  }`;

export default Form;
