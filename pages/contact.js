import ActionBtn from "@/components/Btn/actionBtn/ActionBtn";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useState } from "react";

export default function Contact() {
  // State variables to hold form data
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [offer, setOffer] = useState("");
  const [identity, setIdentity] = useState("");
  const [projectDescription, setProjectDescription] =
    useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      surname,
      phone,
      website,
      offer,
      identity,
      projectDescription,
      isChecked,
    });
  };

  return (
    <>
      <Header />
      <main>
        <section id="contact">
          <h2>[ Collaborons ensemble ]</h2>
          <span className="subtitle">
            baptiste.labaune@gmail.com
          </span>
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
                  onChange={(e) => setName(e.target.value)}
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
                <label htmlFor="phone">Téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+33"
                  required
                />
              </div>
              {/* Website input */}
              <div
                id="website-input-container"
                className="input-container"
              >
                <label htmlFor="website">
                  Site internet *
                </label>
                <input
                  type="url"
                  id="website"
                  value={website}
                  onChange={(e) =>
                    setWebsite(e.target.value)
                  }
                  placeholder="URL"
                  required
                />
              </div>
              <div
                id="offer-input-container"
                className="input-container"
              >
                <label htmlFor="offer">Offres *</label>
                <select
                  id="offer"
                  value={offer}
                  onChange={(e) => setOffer(e.target.value)}
                  required
                >
                  <option value="">Sélection</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>
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
                Description du projet
              </label>
              <textarea
                id="projectDescription"
                value={projectDescription}
                onChange={(e) =>
                  setProjectDescription(e.target.value)
                }
                placeholder="Message..."
                rows="5"
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
                Conformément à la réglementation en matière
                de données à caractère personnel, nous vous
                informons que les informations recueillies
                vous concernant sont collectées...
              </label>
            </div>

            <ActionBtn
              btnText="Envoyer"
              onClickFunction={handleSubmit}
              align="right"
            />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
