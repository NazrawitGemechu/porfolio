import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./ContactMe.module.css";
export const Contact = () => {
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setShowSuccessToast(true);
                    setTimeout(() => setShowSuccessToast(false), 5000); 
                    window.location.reload(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 5000);
                },
            );
    };
    return (
        <section className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact me</h2>
                <p>You can contact me here</p>
            </div>
            <div className={styles.contactForm}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.inputGroup}>
                        <input type="text" name="from_name" placeholder="Name" required />
                        <input type="email" name="to_name" placeholder="Email" required />
                    </div>
                    {<div className={styles.inputGroup}>
                        <input type="text" name="subject" placeholder="Subject" required />
                    </div>}
                    <div className={styles.inputGroup}>
                        <textarea placeholder="Message" name="message" required></textarea>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="submit" value="SEND" className={styles.sendButton} />
                    </div>
                </form>
            </div>
            {showSuccessToast && (
                <div className={styles.toastSuccess}>
                    Email sent successfully!
                </div>
            )}
            {showErrorToast && (
                <div className={styles.toastError}>
                    Failed to send email. Please try again later.
                </div>
            )}
        </section>

        <footer  className={styles.container}id="contactt">
      <div className={styles.text}>
        {/*<h2>Addresess</h2> */}
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nazrawitgemechu9706@gmail.com">nazrawitgemechu9706@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nazrawit-feyissa-828232240/">linkedin.com/NazrawitGemechu</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/NazrawitGemechu">github.com/NazrawitGemechu</a>
        </li>
      </ul>
    </footer>
    );
};

export default Contact;
