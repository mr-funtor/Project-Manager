import TopHeader from "@/components/shared/TopHeader"
import DepartmentsOverview from "@/features/Dashboard/components/DepartmentsOverview"
import ProjectsOverview from "@/features/Dashboard/components/ProjectsOverview"

const DashboardPage = () => {
  return(
    <main>
      <TopHeader
        heading="Dashboard"
        subHeading="See an overview of projects"
      />

      <div className="py-10 px-20">
        <ProjectsOverview/>
        <DepartmentsOverview/>
      </div>
    </main>
  )
}

export default DashboardPage