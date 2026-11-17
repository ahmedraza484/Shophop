import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <span>LEAVE A MESSAGE</span>
      <h2>We love to hear from you</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="E-mail" required />
        <input type="text" placeholder="Subject" required />
        <textarea
          type="text"
          placeholder="Your Message"
          cols={30}
          rows={10}
          required
        />
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
