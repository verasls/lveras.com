import { useState, useRef } from "react";

import "./Contact.css";

export function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div className="contact-form__card">
        <span className="subheading">Contact-me</span>
        <h2>Thanks for reaching out! How can I help you?</h2>

        <p className="text">
          If you have any issues, questions, or want me to help you with your
          project, don't hesitate to ask.
        </p>
        <p className="text">I'll answer all messages as soon as possible.</p>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);

  const submitButtonRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (e.nativeEvent.submitter === e.target.elements.submitButton) {
      if (name && email && message) {
        setName("");
        setEmail("");
        setMessage("");

        setModalOpen(true);
      }
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__name">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Smith"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="contact-form__email">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="me@example.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="contact-form__textarea">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Hi, I would like to talk about..."
          name="message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        name="submitButton"
        className="contact__btn contact__btn--submit"
        ref={submitButtonRef}
      >
        Submit
      </button>

      <ContactModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </form>
  );
}

function ContactModal({ isModalOpen, setModalOpen }) {
  return (
    <div className={`contact-form__modal${isModalOpen ? " open" : ""}`}>
      <p className="modal__text">Obrigado namoca por testar.</p>
      <p className="modal__text">Te amo bebéia</p>

      <div className="btn__container">
        <button
          className="contact__btn contact__btn--close-modal"
          onClick={() => setModalOpen(false)}
        >
          OK
        </button>
      </div>
    </div>
  );
}
