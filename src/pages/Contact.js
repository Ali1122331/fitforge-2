
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <p className="contact-label">GET IN TOUCH</p>

        <h1>
          Let's <span>Connect.</span>
        </h1>

        <p>
          Have a question about FitForge, your workouts,
          or your fitness journey? We'd love to hear from you.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <p className="contact-label">CONTACT FITFORGE</p>

          <h2>We're Here to Help</h2>

          <p className="contact-intro">
            Whether you have questions, suggestions, or feedback,
            feel free to reach out through our contact form.
          </p>

          <div className="contact-info-card">
            <div className="contact-info-icon">💬</div>

            <div>
              <h3>General Questions</h3>
              <p>
                Need help understanding FitForge features?
                Send us a message anytime.
              </p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">💪</div>

            <div>
              <h3>Fitness Support</h3>
              <p>
                Questions about workouts or your training plan?
                Let us know how we can help.
              </p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">💡</div>

            <div>
              <h3>Suggestions & Feedback</h3>
              <p>
                Have an idea to improve FitForge?
                We'd love to hear your feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>

          <p>
            Fill out the form below and share your thoughts.
          </p>

          {submitted && (
            <div className="contact-success" role="status">
              Your message was submitted in demo mode.
              No email has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Full Name</label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>

              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="General Question">General Question</option>
                <option value="Workout Support">Workout Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your Message</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message here..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>

            <p className="contact-demo-note">
              Demo form for Phase 1 — messages are not sent.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
