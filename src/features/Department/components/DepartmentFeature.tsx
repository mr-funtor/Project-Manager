import NewEntityComp from "@/components/shared/NewEntityComp"
import DepartmentTableArea from "./DepartmentTableArea"
import CustomInput from "@/components/ui/CustomInput"
import CustomButton from "@/components/ui/CustomButton"



const DepartmentFeature = ()=> {
  return(
    <div className="py-9 px-15">
      <NewEntityComp
        heading="Create New Department"
        subheading="Create and organise departments"
        buttonText="Create New Department"
      />

      <section className="border border-gray-400 my-10 p-4 rounded-lg flex items-center gap-6">
        <CustomInput
          labeltext="Department Name"
          placeholder="Enter Department Name"
          containerstyle="flex-1"
        />
        <CustomButton
          buttonText="Submit"
          onClick={()=> null}
          containerStyle="self-end w-32"
        />
      </section>

      <DepartmentTableArea/>
    </div>
  )
}

export default DepartmentFeature