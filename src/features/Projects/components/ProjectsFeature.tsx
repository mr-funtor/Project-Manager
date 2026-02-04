import NewEntityComp from "@/components/shared/NewEntityComp"
import ProjectsTableArea from "./ProjectsTableArea"
import { useNavigate } from "react-router"


const ProjectsFeature = ()=> {
  const navigate = useNavigate()

  return(
    <div className="py-9 px-15">
      <NewEntityComp
        heading="Start New Project"
        subheading="Create and configure next project"
        buttonText="Create New Project"
        onButtonClicked={()=> navigate("/new-project")}
      />

      <ProjectsTableArea/>
      
    </div>
  )
}

export default ProjectsFeature