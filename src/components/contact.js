import { useEffect, useState } from "react";
import "../scss/style.css";
import Copyright from "./copyright.js";
import ReactGa from "react-ga";

function Contact() {
  const [showTactic, setShowTactic] = useState(false);
  useEffect(() => {
    ReactGa.initialize("UA-194620693-1");
    ReactGa.pageview(window.location.pathname);
  }, []);
  return (
    <div className="contact">
      {!showTactic && (
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
            <input
              type="text"
              name="name"
              placeholder="Your name..."
              required
            />
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
          <div
            className="changeStateButton"
            onClick={() => {
              setShowTactic(true);
            }}
          >
            Add tactic
          </div>
          <h2>
            Found a bug? Wanna add something to one of my guides or even have a
            suggestion for a guide?
          </h2>
        </div>
      )}
      {showTactic && (
        <div className="containerStrategySubmission">
          <h1>Pet Strategy Submission</h1>

          <form
            action="https://formsubmit.co/acf3b2a9b05e4db68092254332484333"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="https://petsapp-a1393.web.app/success"
            />
            <label>Strategy for:</label>
            <input
              type="text"
              name="name"
              placeholder="Pet Battle Name..."
              required
            />
            <label>Pet Slot 1</label>
            <input
              type="text"
              name="pet1"
              placeholder="Pet Slot 1..."
              required
            />
            <label>Pet Slot 2</label>
            <input
              type="text"
              name="pet2"
              placeholder="Pet Slot 2..."
              required
            />
            <label>Pet Slot 3</label>
            <input
              type="text"
              name="pet3"
              placeholder="Pet Slot 3..."
              required
            />
            <label>Here you can describe the fight:</label>
            <textarea
              type="text"
              name="strategy"
              placeholder="Turn1: Cast X..."
              required
            />
            <button type="submit">Submit</button>
          </form>
          <div
            className="changeStateButton"
            onClick={() => {
              setShowTactic(false);
            }}
          >
            Suggestions
          </div>
        </div>
      )}
      <Copyright />
    </div>
  );
}

export default Contact;
