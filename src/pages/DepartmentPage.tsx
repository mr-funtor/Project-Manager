import TopHeader from "@/components/shared/TopHeader"
import DepartmentFeature from "@/features/Department/components/DepartmentFeature"

const DepartmentPage = () => {
  return(
    <main>
      <TopHeader
        heading="Manage Department"
        subHeading="Create and management department"
      />

      <DepartmentFeature/>
    </main>
  )
}

export default DepartmentPage