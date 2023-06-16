import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../supabaseClient";

import "./Contact.css";

export function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div className="contact-form__card">
        <span className="subheading">Contact-me</span>
        <h2>How can I help you?</h2>

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setSubmitting] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const submitButtonRef = useRef(null);

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    try {
      setSubmitting(true);

      const { error } = await supabase
        .from("contact-me")
        .insert([{ name, email, message }]);

      if (error) {
        console.error("Error submitting the form: ", error);
      } else {
        console.log("Form submitted successfully");

        reset();
        setModalOpen(true);
      }
    } catch (error) {
      console.error("Error submitting the form: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="contact-form__name">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Smith"
          name="name"
          disabled={isSubmitting}
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </div>

      <div className="contact-form__email">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="me@example.com"
          name="email"
          disabled={isSubmitting}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Please enter a valid email address</span>}
      </div>

      <div className="contact-form__textarea">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Hi, I would like to talk about..."
          name="message"
          cols="30"
          rows="10"
          disabled={isSubmitting}
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && <span>This field is required</span>}
      </div>

      <button
        type="submit"
        name="submitButton"
        className="contact__btn contact__btn--submit"
        disabled={isSubmitting}
        ref={submitButtonRef}
      >
        Submit
      </button>

      <ContactModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </form>
  );
}

function ContactModal({ isModalOpen, setModalOpen }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isModalOpen]);

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setModalOpen(false);
    }
  }

  function handleBtnPress(e) {
    e.preventDefault();
    setModalOpen(false);
  }

  return (
    <div
      className={`contact-form__modal${isModalOpen ? " open" : ""}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={modalRef}
    >
      <div className="txt__container">
        <p className="modal__txt">Your message has been sent.</p>
        <p className="modal__txt">Thanks for reaching out!</p>
      </div>

      <div className="btn__container">
        <button
          className="contact__btn contact__btn--close-modal"
          onClick={handleBtnPress}
        >
          OK
        </button>
      </div>
    </div>
  );
}
