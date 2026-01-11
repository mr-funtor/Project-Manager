import NewEntityComp from "@/components/shared/NewEntityComp"
import TeamTableArea from "./TeamTableArea";
import useTeamFeatureService from "../services/useTeamFeatureService";
import DynamicModal from "@/components/shared/DynamicModal";
import TeamCreationForm from "./TeamCreationForm";


const TeamFeature = ()=> {
  const { state, dispatch, createNewTeamMember} = useTeamFeatureService()

  return(
    <div className="py-9 px-15">
      <NewEntityComp
        heading="Create New Team Member"
        subheading="Create and configure new member"
        buttonText="Create New Member"
        onButtonClicked={()=> dispatch({isModalOpen:true})}
      />

      <DynamicModal
        isModalOpen={state.isModalOpen}
        onRequestClose={()=> dispatch({isModalOpen:false})}
      >
        <TeamCreationForm
          onCreationAction={createNewTeamMember}
        />
      </DynamicModal>

      <TeamTableArea/>
    </div>
  )
}

export default TeamFeature