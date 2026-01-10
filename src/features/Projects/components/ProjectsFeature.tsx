import NewEntityComp from "@/components/shared/NewEntityComp"
import ProjectsTableArea from "./ProjectsTableArea"


const ProjectsFeature = ()=> {
  return(
    <div className="py-9 px-15">
      <NewEntityComp
        heading="Start New Project"
        subheading="Create and configure next project"
        buttonText="Create New Project"
      />

      <ProjectsTableArea/>
      
    </div>
  )
}

export default ProjectsFeature