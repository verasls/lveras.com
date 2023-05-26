import "./contact.css";

export function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div className="contact-form-card">
        <span className="subheading">Contact-me</span>
        <h2>Thanks for reaching out! How can I help you?</h2>

        <p className="text">
          If you have any issues, questions, or want me to help you with your
          project, don't hesitate to ask.
        </p>
        <p className="text">I'll answer all messages as soon as possible.</p>

        <div className="contact-form">
          <div className="input-name">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Smith"
              name="name"
              required
            />
          </div>

          <div className="input-email">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="me@example.com"
              name="email"
              required
            />
          </div>

          <div className="input-textarea">
            <label for="message">Message</label>
            <textarea
              id="message"
              placeholder="Hi, I would like to talk about..."
              name="message"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>

          <button className="btn-submit">Submit</button>
        </div>
      </div>
    </section>
  );
}
