import ActionBtn from "@/components/Btn/actionBtn/ActionBtn";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs

export default function Contact() {
  // State variables to hold form data
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [offer, setOffer] = useState("");
  const [identity, setIdentity] = useState("");
  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] =
    useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [messageType, setMessageType] = useState(""); // For success/error messages

  const cleanForm = () => {
    setName("");
    setSurname("");
    setPhone("");
    setWebsite("");
    setOffer("");
    setIdentity("");
    setProjectDescription("");
    setEmail("");
    setIsChecked(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data object for EmailJS
    const templateParams = {
      name: name,
      surname: surname,
      phone: phone,
      website: website,
      offer: offer,
      identity: identity,
      projectDescription: projectDescription,
      email: email,
    };

    emailjs
      .send(
        "service_w1km3j9", // Your service ID
        "template_3c9gkto", // Your template ID
        templateParams,
        "D8y3pdc18mEveJ6es" // Your public key
      )
      .then((response) => {
        console.log(
          "SUCCESS!",
          response.status,
          response.text
        );
        setMessageType("success"); // Set message type to success
        cleanForm(); // Clear form after success
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setMessageType("error"); // Set message type to error
      });
  };

  return (
    <>
      <Header />
      <main>
        <section id="contact">
          <div className="section-container">
            <h2>[ Collaborons ensemble ]</h2>
            <span className="subtitle">
              baptiste.labaune@gmail.com
            </span>
            {messageType === "success" && (
              <span id="success-msg">
                Votre message a bien été envoyé !
              </span>
            )}
            {messageType === "error" && (
              <span id="error-msg">
                Il y&#39;a eu une erreur lors de l&#39;envoi
                du message.
                <br />
                <br />
                Contactez directement
                baptiste.labaune@gmail.com{" "}
              </span>
            )}
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="small-inputs-container">
                {/* Name input */}
                <div
                  id="name-input-container"
                  className="input-container"
                >
                  <label htmlFor="name">Nom *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="DUPONT"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                  />
                </div>
                {/* Surname input */}
                <div
                  id="surname-input-container"
                  className="input-container"
                >
                  <label htmlFor="surname">Prénom *</label>
                  <input
                    type="text"
                    placeholder="Jean"
                    id="surname"
                    value={surname}
                    onChange={(e) =>
                      setSurname(e.target.value)
                    }
                    required
                  />
                </div>
                {/* Phone input */}
                <div
                  id="phone-input-container"
                  className="input-container"
                >
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    placeholder="+33"
                  />
                </div>
                {/* Email input */}
                <div
                  id="email-input-container"
                  className="input-container"
                >
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="jean.dupont@gmail.com"
                    required
                  />
                </div>
                {/* Website input */}
                <div
                  id="website-input-container"
                  className="input-container"
                >
                  <label htmlFor="website">
                    Site internet
                  </label>
                  <input
                    type="url"
                    id="website"
                    value={website}
                    onChange={(e) =>
                      setWebsite(e.target.value)
                    }
                    placeholder="URL"
                  />
                </div>
                {/* Offer input */}
                <div
                  id="offer-input-container"
                  className="input-container"
                >
                  <label htmlFor="offer">Offres *</label>
                  <select
                    id="offer"
                    value={offer}
                    onChange={(e) =>
                      setOffer(e.target.value)
                    }
                    required
                  >
                    <option value="">Sélection</option>
                    <option value="Option 1">
                      Option 1
                    </option>
                    <option value="Option 2">
                      Option 2
                    </option>
                  </select>
                </div>
                {/* Identity input */}
                <div
                  id="identity-input-container"
                  className="input-container"
                >
                  <label htmlFor="identity">
                    Identité du demandeur *
                  </label>
                  <select
                    id="identity"
                    value={identity}
                    onChange={(e) =>
                      setIdentity(e.target.value)
                    }
                    required
                  >
                    <option value="">Sélection</option>
                    <option value="Entreprise">
                      Entreprise
                    </option>
                    <option value="Particulier">
                      Particulier
                    </option>
                  </select>
                </div>
              </div>

              <div
                id="project-description-input-container"
                className="input-container"
              >
                <label htmlFor="projectDescription">
                  Description du projet *
                </label>
                <textarea
                  id="projectDescription"
                  value={projectDescription}
                  onChange={(e) =>
                    setProjectDescription(e.target.value)
                  }
                  placeholder="Message..."
                  rows="5"
                  required
                />
              </div>

              {/* Privacy checkbox */}
              <div className="checkbox-container">
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) =>
                      setIsChecked(e.target.checked)
                    }
                    required
                  />
                  Conformément à la réglementation en
                  matière de données à caractère personnel,
                  nous vous informons que les informations
                  recueillies vous concernant sont
                  collectées...
                </label>
              </div>

              <ActionBtn
                btnText="Envoyer"
                align="right"
                buttonType="submit" // Use buttonType prop to set "submit"
              />
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}