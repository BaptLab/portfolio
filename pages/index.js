import Head from "next/head";
import Header from "@/components/header/Header";
import Competence from "@/components/competence/Competence";

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
      </main>
    </>
  );
}
