import NewEntityComp from "@/components/shared/NewEntityComp"
import TeamTableArea from "./TeamTableArea";


const TeamFeature = ()=> {
  return(
    <div className="py-9 px-15">
      <NewEntityComp
        heading="Create New Team Member"
        subheading="Create and configure new member"
        buttonText="Create New Member"
      />

      <TeamTableArea/>
    </div>
  )
}

export default TeamFeature