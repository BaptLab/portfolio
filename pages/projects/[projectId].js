import ActionBtn from "@/components/Btn/actionBtn/ActionBtn";
import GoingUpBtn from "@/components/Btn/goingUpBtn/GoingUpBtn";
import NextAndBackBtn from "@/components/Btn/nextAndBackBtn/NextAndBackBtn";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();

  const project = {
    clientName: "Mathieu LEFEBVRE - TruePeak Productions",
    date: "2024",
    offer: "Site Statique Basique",
    technologies: ["WEBDESIGN", "WEBFLOW", "ANIMATION"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    liveSite: "https://truepeakproductions.com",
    images: [
      "/images/projets/truepeak/TruePeak_1.PNG",
      "/images/projets/truepeak/TruePeak_2.PNG",
      "/images/projets/truepeak/TruePeak_3.PNG",
      "/images/projets/truepeak/TruePeak_4.PNG",
    ],
  };

  // If the page is still generating on the server or fallback mode is enabled
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main>
        <section id="project">
          <div className="section-container">
            <h2>[ {project.clientName} ]</h2>
            <div className="project-info">
              <div className="project-date project-container">
                <h3 className="project-title">DATE</h3>
                <p>{project.date}</p>
              </div>
              <div className="project-offer project-container">
                <h3 className="project-title">OFFRE</h3>
                <p>{project.offer}</p>
              </div>
            </div>

            <div className="project-tech">
              <h3 className="project-title">
                TECHNOLOGIES
              </h3>
              <div className="project-technologies-container project-container">
                {project.technologies.map(
                  (techno, index) => (
                    <p key={index}>[ {techno} ]</p>
                  )
                )}
              </div>
            </div>

            <div className="project-description project-container">
              <h3 className="project-title">DESCRIPTION</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-live-link">
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                data-new-text="VOIR LE SITE LIVE [⇗]" /* The new text you want on hover */
              >
                VOIR LE SITE LIVE [⇗]
              </a>
            </div>

            <div className="project-pictures project-container">
              {project.images.map((imageSrc, index) => (
                <Image
                  src={imageSrc}
                  alt={`Project image ${index + 1}`}
                  width={500}
                  height={300}
                  key={index}
                />
              ))}
            </div>
            <NextAndBackBtn
              direction="next"
              btnTxt="projet suivant"
            />
            <ActionBtn
              navTo="/contact"
              btnText="Contactez-moi"
            />
          </div>
        </section>
      </main>
      <Footer />
      <GoingUpBtn />
    </>
  );
};

export default ProjectPage;

// Commented out the getStaticProps function for now
// export async function getStaticProps({ params }) {
//   const { projectId } = params;

//   try {
//     // Log the URL being accessed
//     const url = `${process.env.NEXT_PUBLIC_BASE_URL}/data/project${projectId}.json`;
//     console.log("Fetching data from:", url);

//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(
//         `Failed to fetch data, status code: ${res.status}`
//       );
//     }

//     const project = await res.json();

//     return {
//       props: {
//         project,
//       },
//       revalidate: 10, // Revalidate at most every 10 seconds
//     };
//   } catch (error) {
//     console.error("Error fetching JSON data:", error);
//     return {
//       props: {
//         project: {}, // Return empty object in case of error
//       },
//     };
//   }
// }
