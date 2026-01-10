import TopHeader from "@/components/shared/TopHeader"
import TeamFeature from "@/features/Team/components/TeamFeature"

const TeamsPage = () => {
  return(
    <main>
      <TopHeader
        heading="Manage Teams"
        subHeading="Create and Organise roles"
      />

      <TeamFeature/>
    </main>
  )
}

export default TeamsPage