/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "@/components/header/Header";
import Competence from "@/components/competence/Competence";
import Project from "@/components/project/Project";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import SlideCarrousel from "@/components/slideCarrousel/SlideCarrousel";
import ActionBtn from "@/components/Btn/actionBtn/ActionBtn";
import GoingUpBtn from "@/components/Btn/goingUpBtn/GoingUpBtn";

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
          <div className="section-container">
            <h2>[ Qui suis-je ? ]</h2>
            <div className="profil-container">
              <Image
                src="/images/profil.JPG"
                alt="Baptiste LABAUNE"
                width={379}
                height={230}
              ></Image>
              <p className="profil-description">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis{" "}
                <strong>nostrud exercitation</strong>{" "}
                ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in{" "}
                <strong>reprehenderit </strong> in voluptate
                velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
        <section id="technos">
          <div className="section-container">
            <h2>[ Mes compétences ]</h2>
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
                  "Jest",
                  "Cypress",
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
                  "JUnit",
                ]}
              />
              <Competence
                logoPath="/logos/testing.png"
                title="Connaissances"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                competenceList={[
                  "Méthodologie agile",
                  "Démarche CI/CD",
                  "Conformité RGPD (master 2)",
                  "Architecture logicielle",
                  "Architecture Base de données",
                ]}
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
          </div>
        </section>
        <section id="projets">
          <div className="section-container">
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
          </div>
        </section>
        <section id="offres">
          <div className="section-container">
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
                prédéfini ou sur mesure (cf. colonne Prix).
                La complexité spécifique de votre demande
                peut également influencer le coût final et
                faire dépasser les prix indiqués. Chaque
                devis est personnalisé pour s'adapter au
                mieux à vos besoins et garantir un service
                de qualité.
              </p>
            </div>
            <ActionBtn
              btnText="Je suis intéressé"
              navTo="/contact"
            />
          </div>
        </section>
        <Footer />
      </main>
      <GoingUpBtn />
    </>
  );
}

export async function getStaticProps() {
  try {
    // Log the URL being accessed
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/data/offres.json`;
    console.log("Fetching data from:", url);

    const res = await fetch(url);

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

/* export async function getStaticPaths() {
  // Assuming you have an endpoint or a list of all project IDs
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/projects.json`
  );
  const projects = await res.json();

  const paths = projects.map((project) => ({
    params: { projectId: project.id.toString() }, // Ensure projectId is a string
  }));

  return {
    paths,
    fallback: true, // Enable fallback mode if there are more projects added later
  };
}
 */
