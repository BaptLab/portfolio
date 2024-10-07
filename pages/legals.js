import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Legal = () => {
  const legalData = {
    sections: [
      {
        title: "Informations sur l'auto-entrepreneur",
        content: [
          {
            label: "Nom de l'auto-entrepreneur",
            value: "Baptiste LABAUNE",
          },
          {
            label: "Adresse e-mail",
            value: "baptiste.labaune@gmail.com",
          },
        ],
      },
      {
        title: "Hébergement du site",
        content: [
          {
            label: "Hébergeur",
            value: "TBD",
          },
          {
            label: "Adresse",
            value: "TBD",
          },
        ],
      },
      {
        title: "Propriété intellectuelle",
        content: [
          {
            value:
              "Le contenu de ce site, y compris mais sans s'y limiter, les textes, images, vidéos et éléments graphiques, est la propriété de Mathieu Lefebvre. Toute reproduction ou utilisation non autorisée est interdite.",
          },
        ],
      },
      {
        title: "Collecte de données personnelles",
        content: [
          {
            value:
              "Les informations personnelles collectées sur ce site ne sont utilisées qu'à des fins de simplification des demandes de contacts. Elles ne seront en aucun cas vendues ou cédées à des tiers sans votre consentement.",
          },
          {
            value:
              "Conformément à la loi 'Informatique et Libertés' du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter à l'adresse e-mail fournie ci-dessus.",
          },
        ],
      },
      {
        title: "Cookies",
        content: [
          {
            value:
              "Ce site ne fait l'usage d'aucun cookies.",
          },
        ],
      },
      {
        title: "Liens externes",
        content: [
          {
            value:
              "Ce site peut contenir des liens vers des sites externes pertinents pour les services proposés. Cependant, nous n'assumons aucune responsabilité quant au contenu de ces sites externes.",
          },
        ],
      },
      {
        title: "Responsabilité",
        content: [
          {
            value:
              "Nous nous efforçons de fournir des informations exactes et à jour sur ce site, mais nous ne pouvons garantir l'exactitude ou l'exhaustivité des informations fournies. En conséquence, nous déclinons toute responsabilité quant à l'utilisation qui pourrait être faite de ces informations.",
          },
        ],
      },
      {
        title: "Modification des mentions légales",
        content: [
          {
            value:
              "Nous nous réservons le droit de modifier ces mentions légales à tout moment. Les modifications prendront effet dès leur publication sur le site.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <section id="legals">
          <div className="section-container">
            <h2>[ Mentions Légales ]</h2>
            <div className="legal-container">
              {legalData.sections.map((section, index) => (
                <div key={index} className="legal-section">
                  <h4 className="legal-title">
                    {section.title}
                  </h4>
                  {section.content.map(
                    (item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="legal-content"
                      >
                        {item.label && (
                          <span>{item.label}: </span>
                        )}
                        <span>{item.value}</span>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Legal;
