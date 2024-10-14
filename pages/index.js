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

export default function Home({ offres, projects }) {
  console.log("offres:", offres);
  console.log("projets:", projects);
  return (
    <>
      <Head>
        <title>
          Baptiste LABAUNE - Développeur web en freelance
        </title>
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
                Je suis Baptiste,{" "}
                <strong>développeur web</strong> freelance,
                spécialisé dans la création de sites
                internet sur mesure. Que vous soyez un{" "}
                <strong>
                  particulier ou une entreprise
                </strong>{" "}
                je vous accompagne dans la réalisation de
                vos projets web, mais aussi dans
                l’amélioration ou l’optimisation de sites
                existants. Grâce à mon expertise en
                développement{" "}
                <strong> frontend et backend</strong> ainsi
                qu’en <strong>conformité RGPD</strong>, je
                suis à même de proposer des solutions
                adaptées à chaque besoin. Curieux et motivé,
                je suis ouvert à{" "}
                <strong>tous types de projets</strong>, et
                disponible pour des missions en entreprise,
                avec la volonté de relever de nouveaux défis
                pour continuer à élargir mes compétences.
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
                description="Je maîtrise les outils et frameworks nécessaires à la création d'interfaces web dynamiques et interactives, offrant une expérience utilisateur fluide et moderne."
                competenceList={[
                  "HTML, CSS, JavaScript",
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
                description="J’apporte des compétences solides dans la construction et la gestion de systèmes backend, en garantissant sécurité, performance et une gestion optimisée des bases de données."
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
                description="Je possède une expertise en méthodologies de travail, en conformité aux normes (notamment RGPD), ainsi qu’en architecture logicielle, assurant des bases solides à chaque projet."
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
                description="J’utilise une gamme d'outils et de logiciels professionnels pour concevoir, développer et optimiser des projets web, garantissant des solutions de qualité à chaque étape."
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
            {projects.length > 0 ? (
              projects.map((project) => (
                <Project
                  key={project.id}
                  imagePath={project.images[0]}
                  projectId={project.id.toString()}
                  clientName={project.clientName}
                  projectDescription={project.description}
                  techUsed={project.technologies}
                />
              ))
            ) : (
              <p>Aucun projet disponible pour le moment.</p>
            )}
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

/* export async function getStaticProps() {
  try {
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
} */

export async function getStaticProps() {
  try {
    const offresUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/data/offres.json`;
    const projectsUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/data/projets.json`;

    // Fetch data for both offres and projects concurrently
    const [offresRes, projectsRes] =
      await Promise.allSettled([
        fetch(offresUrl),
        fetch(projectsUrl),
      ]);

    // Handle offres response
    let offres = [];
    if (
      offresRes.status === "fulfilled" &&
      offresRes.value.ok
    ) {
      offres = await offresRes.value.json();
    } else {
      console.error(
        `Failed to fetch offres, status: ${offresRes?.value?.status}`
      );
    }

    // Handle projects response
    let projects = [];
    if (
      projectsRes.status === "fulfilled" &&
      projectsRes.value.ok
    ) {
      projects = await projectsRes.value.json();
    } else {
      console.error(
        `Failed to fetch projects, status: ${projectsRes?.value?.status}`
      );
    }

    return {
      props: {
        offres,
        projects,
      },
    };
  } catch (error) {
    console.error("Error fetching JSON data:", error);
    return {
      props: {
        offres: [], // Return empty array in case of error
        projects: [], // Return empty array in case of error
      },
    };
  }
}
