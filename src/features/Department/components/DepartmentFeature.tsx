import NewEntityComp from "@/components/shared/NewEntityComp"
import DepartmentTableArea from "./DepartmentTableArea"
import CustomInput from "@/components/ui/CustomInput"
import CustomButton from "@/components/ui/CustomButton"
import useDepartmentFeatureService from "../services/useDepartmentFeatureService"



const DepartmentFeature = ()=> {
  const {state, dispatch, createNewDepartment} = useDepartmentFeatureService();

  return(
    <div className="py-9 px-15">
      <NewEntityComp
        heading="Create New Department"
        subheading="Create and organise departments"
        buttonText="Create New Department"
        onButtonClicked={()=>dispatch({isCreatingNewDepartment: true})}
      />

      {state.isCreatingNewDepartment && <section className="border border-gray-400 my-10 p-4 rounded-lg flex items-center gap-6">
        <CustomInput
          labeltext="Department Name"
          placeholder="Enter Department Name"
          containerstyle="flex-1"
          onChange={(e)=> dispatch({departmentName: e.target.value})}
          value={state.departmentName}
        />
        <CustomButton
          buttonText="Submit"
          onClick={createNewDepartment}
          containerStyle="self-end w-32"
        />
      </section>}

      <DepartmentTableArea/>
    </div>
  )
}

export default DepartmentFeature