import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ActionBtn from "@/components/Btn/actionBtn/ActionBtn";
import GoingUpBtn from "@/components/Btn/goingUpBtn/GoingUpBtn";
import NextAndBackBtn from "@/components/Btn/nextAndBackBtn/NextAndBackBtn";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/projets.json`
  );
  const projects = await res.json();

  const paths = projects.map((project) => ({
    params: { projectId: project.id.toString() },
  }));

  return {
    paths,
    fallback: false, // If true, the page will be generated if it's not found; otherwise, it will return a 404
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/projets.json`
  );
  const projects = await res.json();

  const project = projects.find(
    (proj) => proj.id === params.projectId
  );

  return {
    props: {
      project: project || null,
      totalProjects: projects.length, // Pass the total number of projects
    },
  };
}

const ProjectPage = ({ project, totalProjects }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
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

            {/* Pass totalProjects to NextAndBackBtn */}
            <NextAndBackBtn
              direction="next"
              btnTxt="projet suivant"
              totalProjects={totalProjects}
            />
            <NextAndBackBtn
              direction="back"
              btnTxt="projet précédent"
              totalProjects={totalProjects}
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
