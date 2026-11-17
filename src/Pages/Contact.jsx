import React from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    toast.error("You Cant Send Message. Try Again Later");
  };

  return (
    <section className="contact-section">
      <span>LEAVE A MESSAGE</span>
      <h2>We love to hear from you</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Subject" />
        <textarea type="text" placeholder="Your Message" cols={30} rows={10} />
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
