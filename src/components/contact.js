import "../scss/style.css";
import Copyright from "./copyright.js";
function Contact() {
  return (
    <div className="contact">
      <div className="containerContact">
        <h1>Contact</h1>

        <form
          action="https://formsubmit.co/acf3b2a9b05e4db68092254332484333"
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value="https://petsapp-a1393.web.app/success"
          />
          <label>Name*</label>
          <input type="text" name="name" placeholder="Your name..." required />
          <label>Character Name*</label>
          <input
            type="text"
            name="charName"
            placeholder="Your Character Name..."
            required
          />
          <label>
            Your message with the suggestion / bug or anything really*
          </label>
          <textarea
            type="text"
            name="message"
            placeholder="Write here your thoughts..."
            required
          />
          <button type="submit">Send</button>
        </form>

        <h2>
          Found a bug? Wanna add something to one of my guides or even have a
          suggestion for a guide?
        </h2>
      </div>
      <Copyright />
    </div>
  );
}

export default Contact;
