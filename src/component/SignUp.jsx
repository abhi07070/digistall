import React, { useState } from "react";

import DataForm from "../DataForm";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handleMessageChange = (event) => {
    const words = event.target.value.trim().split(/\s+/);
    if (words.length > 50) {
      setError("Message must have less than or equal to 50 words.");
      return;
    }
    setMessage(event.target.value);
    setError("");
  };

  const handleContinue = () => {
    switch (step) {
      case 1:
        if (name.length < 3) {
          setError("Name must be at least 3 characters long.");
          return;
        }
        break;
      case 2:
        if (!validateEmail(email)) {
          setError("Email is not valid.");
          return;
        }
        break;
      case 3:
        if (message.trim().length === 0) {
          setError("Message must not be empty.");
          return;
        }
        break;
      default:
        break;
    }

    setStep(step + 1);
  };

  const handleSubmit = () => {
    // Save data to local storage
    localStorage.setItem("formData", JSON.stringify({ name, email, message }));

    setStep((prev) => (prev = 0));
    setSubmitted(true);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="App">
      {step == 0 ? "" : <h2>Step - {step}</h2>}
      <div className="signup-container">
        {submitted ? (
          <>
            <h2>Filled detail </h2>
            <div>
              <DataForm />
            </div>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            {step === 1 && (
              <div className="wrapper">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            )}
            {step === 2 && (
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            )}
            {step === 3 && (
              <div>
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={handleMessageChange}
                  rows="5"
                  cols="50 "
                />
              </div>
            )}
            {error && <p className="error">{error}</p>}
            <div>
              {step < 3 ? (
                <button className="btn" onClick={handleContinue}>
                  Continue
                </button>
              ) : (
                <button className="btn" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
