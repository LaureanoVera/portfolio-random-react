import axios from "axios";
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    axios.post("/api/enviarContacto", {
      name: name,
      message: message
    })
    console.log(name+" // "+message);
    setName("")
    setMessage("")
  }

  return (
    <div className="contact">
      <div className="contact__title">
        <h2>Contact</h2>
      </div>
      <div className="contact__form">
        <form>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            placeholder="Nombre"
          />
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Deja tu mensaje"
          ></textarea>
          <button onClick={sendMessage}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
