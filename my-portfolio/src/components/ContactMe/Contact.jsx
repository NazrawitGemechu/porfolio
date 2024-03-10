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
            .sendForm('service_ff3rw7l', 'template_11bqgpu', form.current, {
                publicKey: 'BZOX4kxWWWfiPkwJs',
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
    );
};

export default Contact;
