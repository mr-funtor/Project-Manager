import CustomInput from "@/components/ui/CustomInput"
import CustomSelect from "@/components/ui/CustomSelect"
import CustomTextArea from "@/components/ui/CustomTextArea"

const BasicInformationSection = () => {
  return(
    <section>
      <h2 className="font-bold pb-3 border-b border-gray-400">Basic Information</h2>

      <div className="grid grid-cols-2 gap-6 mt-5">
        <CustomInput
          labeltext="Project Name"
          placeholder="Enter Project Name"
          maxLength={50}
        />
        <CustomSelect
          labelText="Department"
          placeholder="Select Department"
          options={[]}
        />
        <CustomInput
          labeltext="Project Owner"
          placeholder="Enter Project Owner"
          maxLength={50}
          containerstyle="col-span-2"
        />
        <CustomTextArea
          labelText="Project Description"
          placeholder="Describe goals, scope, requirements..."
          maincontainerstyle="col-span-2"
        />
        <CustomInput
          labeltext="Start Date"
          type="date"
        />
        <CustomInput
          labeltext="End Date"
          type="date"
        />
      </div>
    </section>
  )
}

export default BasicInformationSection