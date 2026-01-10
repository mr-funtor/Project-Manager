import TopHeader from "@/components/shared/TopHeader"
import NewProjectForm from "@/features/NewProject/components/NewProjectForm"

const NewProjectPage = () => {
  return(
    <main>
      <TopHeader
        heading="Create New Project"
        subHeading="Set up a new project with team members and resources"
      />

      <div className="px-44 py-10">
        <NewProjectForm/>
      </div>
    </main>
  )
}

export default NewProjectPage