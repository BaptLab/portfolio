import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <h1>Project for {projectId}</h1>
      {/* Render project details based on clientName */}
    </div>
  );
};

export default ProjectPage;
