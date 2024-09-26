/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "@/components/header/Header";
import Competence from "@/components/competence/Competence";
import Project from "@/components/project/Project";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import SlideCarrousel from "@/components/slideCarrousel/SlideCarrousel";

export default function Home({ offres }) {
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
          <SlideCarrousel offres={offres} />
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

export async function getStaticProps() {
  try {
    // Use the environment variable for the base URL
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/offres.json`
    );

    // Check if the response is OK
    if (!res.ok) {
      throw new Error(
        `Failed to fetch data, status code: ${res.status}`
      );
    }

    const offres = await res.json();

    return {
      props: {
        offres,
      },
    };
  } catch (error) {
    console.error("Error fetching JSON data:", error);
    return {
      props: {
        offres: [], // Return empty array in case of error
      },
    };
  }
}
