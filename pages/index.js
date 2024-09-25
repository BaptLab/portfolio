/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "@/components/header/Header";
import Competence from "@/components/competence/Competence";
import Project from "@/components/project/Project";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Offre from "@/components/offre/Offre";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baptiste LABAUNE - BLab.</title>
        <meta
          name="description"
          content="Site internet de Baptiste LABAUNE"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="profil">
          <h2>[ A propos ]</h2>
          <div className="profil-container">
            <Image
              src="/images/profil.jpg"
              alt="Baptiste LABAUNE"
              width={379}
              height={230}
            ></Image>
            <p className="profil-description">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis{" "}
              <strong>nostrud exercitation</strong> ullamco
              laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in{" "}
              <strong>reprehenderit </strong> in voluptate
              velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
          <Competence
            logoPath="/logos/competences.png"
            title="Compétences"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            competenceList={[
              "Méthodologie agile",
              "Conformité RGPD (master 2)",
              "Architecture logicielle",
              "Architecture Base de données",
            ]}
          />
        </section>
        <section id="technos">
          <h2>[ Mes technologies ]</h2>
          <div className="competences-container">
            <Competence
              logoPath="/logos/frontend.png"
              title="Frontend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              competenceList={[
                "HTML",
                "CSS",
                "JavaScript",
                "Wordpress",
                "Angular",
                "React",
                "Next.js",
              ]}
            />
            <Competence
              logoPath="/logos/backend.png"
              title="Backend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              competenceList={[
                "Java",
                "SpringBoot (security, starter web, data JPA, etc.)",
                "MongoDB & MySQL",
              ]}
            />
            <Competence
              logoPath="/logos/testing.png"
              title="Testing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              competenceList={["Cypress", "JUnit", "Jest"]}
            />
            <Competence
              logoPath="/logos/software.png"
              title="Logiciels"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              competenceList={[
                "Figma",
                "Visual Studio Code",
                "Eclipse",
                "Photoshop & Premiere Pro",
              ]}
            />
          </div>
        </section>
        <section id="projets">
          <h2>[ Mes projets ]</h2>
          <Project
            imagePath="/images/test.jpg"
            projectId="01"
            clientName="Nom du client"
            projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            techUsed={["HTML", "CSS", "JS"]}
          />
          <Project
            imagePath="/images/test2.jpg"
            projectId="02"
            clientName="Nom du client"
            projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            techUsed={["HTML", "CSS", "JS"]}
          />
        </section>
        <section id="offres">
          <h2>[ Mes offres ]</h2>
          <div className="offres-container">
            <Offre
              offreId="01"
              offreName="Site Statique Basique"
              offreTechnos={"[HTML, CSS, JS]"}
              offreVersion="Maquette prédéfinie / Sur Mesure"
              offreBackOffice="Non"
              offreDescription="Un site vitrine léger et performant, développé en HTML, CSS, et JavaScript, parfait pour une présence en ligne simple et efficace. Idéal pour présenter vos services ou produits, avec un design moderne, mais sans gestion de contenu complexe. Site Responsive. SEO Naturel. Prise en charge de l’hébergement pour 1 an."
              offrePrice="350€ - 550€"
            />
            <Offre
              offreId="01"
              offreName="Site Statique Basique"
              offreTechnos={"[HTML, CSS, JS]"}
              offreVersion="Maquette prédéfinie / Sur Mesure"
              offreBackOffice="Non"
              offreDescription="Un site vitrine léger et performant, développé en HTML, CSS, et JavaScript, parfait pour une présence en ligne simple et efficace. Idéal pour présenter vos services ou produits, avec un design moderne, mais sans gestion de contenu complexe. Site Responsive. SEO Naturel. Prise en charge de l’hébergement pour 1 an."
              offrePrice="350€ - 550€"
            />
            <Offre
              offreId="01"
              offreName="Site Statique Basique"
              offreTechnos={"[HTML, CSS, JS]"}
              offreVersion="Maquette prédéfinie / Sur Mesure"
              offreBackOffice="Non"
              offreDescription="Un site vitrine léger et performant, développé en HTML, CSS, et JavaScript, parfait pour une présence en ligne simple et efficace. Idéal pour présenter vos services ou produits, avec un design moderne, mais sans gestion de contenu complexe. Site Responsive. SEO Naturel. Prise en charge de l’hébergement pour 1 an."
              offrePrice="350€ - 550€"
            />
            <Offre
              offreId="01"
              offreName="Site Statique Basique"
              offreTechnos={"[HTML, CSS, JS]"}
              offreVersion="Maquette prédéfinie / Sur Mesure"
              offreBackOffice="Non"
              offreDescription="Un site vitrine léger et performant, développé en HTML, CSS, et JavaScript, parfait pour une présence en ligne simple et efficace. Idéal pour présenter vos services ou produits, avec un design moderne, mais sans gestion de contenu complexe. Site Responsive. SEO Naturel. Prise en charge de l’hébergement pour 1 an."
              offrePrice="350€ - 550€"
            />
          </div>
          <div className="offre-warning">
            <Image
              src={"/logos/warning.png"}
              width={24}
              height={24}
            />
            <p className="offre-warning-paragraphe">
              Les prix indiqués sont donnés à titre
              indicatif et peuvent varier en fonction de
              plusieurs facteurs. La présence d'un
              back-office, le choix entre un design
              prédéfini ou sur mesure (cf. colonne Prix). La
              complexité spécifique de votre demande peut
              également influencer le coût final et faire
              dépasser les prix indiqués. Chaque devis est
              personnalisé pour s'adapter au mieux à vos
              besoins et garantir un service de qualité.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
