import TopHeader from "@/components/shared/TopHeader"
import ProjectsFeature from "@/features/Projects/components/ProjectsFeature"

const ProjectsPage = () => {
  return(
    <main>
      <TopHeader
        heading="Projects"
        subHeading="Track project milestones, task completion, and deadline adherence"
      />

      <ProjectsFeature/>
    </main>
  )
}

export default ProjectsPage