import ActionBtn from "@/components/Btn/actionBtn/ActionBtn";
import GoingUpBtn from "@/components/Btn/goingUpBtn/GoingUpBtn";
import NextAndBackBtn from "@/components/Btn/nextAndBackBtn/NextAndBackBtn";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import { useRouter } from "next/router";

const ProjectPage = ({ project }) => {
  const router = useRouter();

  // If the page is still generating on the server or fallback mode is enabled
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // If no project data is available
  if (!project || Object.keys(project).length === 0) {
    return <div>Project not found</div>;
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
                data-new-text="VOIR LE SITE LIVE [⇗]"
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
export async function getStaticPaths() {
  // Fetch the local JSON file with all the projects from the public folder
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/projets.json`
  );
  const projects = await res.json();

  // Generate static paths for all projects
  const paths = projects.map((project) => ({
    params: { projectId: project.id },
  }));

  return {
    paths,
    fallback: false, // Pre-generate all project pages at build time
  };
}

export async function getStaticProps({ params }) {
  const { projectId } = params;

  try {
    // Fetch the local JSON file with all the projects from the public folder
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/projets.json`
    );
    const projects = await res.json();

    // Find the project that matches the projectId from the URL
    const project = projects.find(
      (proj) => proj.id === projectId
    );

    // If the project is not found, return a 404
    if (!project) {
      return {
        notFound: true, // This will trigger a 404 page
      };
    }

    return {
      props: {
        project,
      },
    };
  } catch (error) {
    console.error("Error fetching project data:", error);
    return {
      props: {
        project: {},
      },
    };
  }
}
