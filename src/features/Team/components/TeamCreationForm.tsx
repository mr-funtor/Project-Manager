import CustomButton from "@/components/ui/CustomButton";
import CustomInput from "@/components/ui/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect";
import type { CreateTeamMemberType } from "@/types/team-types";
import { useForm } from "react-hook-form";

type TeamCreationFormProps = {
  onCreationAction: (values: CreateTeamMemberType)=> void,
}

const TeamCreationForm = ({ onCreationAction }:TeamCreationFormProps) => {
  const { register, handleSubmit } = useForm<CreateTeamMemberType>()

  return(
    <form 
      onSubmit={handleSubmit(onCreationAction)} 
      className="w-125 bg-white text-black py-10 px-8 rounded-lg"
    >
      <p className="font-bold mb-3">Please Fill Form</p>

      <CustomInput
        {...register("firstName")}
        labeltext="First Name"
        containerstyle="mb-3"
      />

      <CustomInput
        {...register("lastName")}
        labeltext="Last Name"
        containerstyle="mb-3"
      />

      <CustomSelect
        labelText="Role"
        options={[
          {
            key: "Developer",
            value: 1
          },
          {
            key: "Manager",
            value: 2
          },
        ]}
        containerstyle="mb-10"
      />

      <CustomButton
        buttonText="Create"
        type="submit"
      />
    </form>
  )
}

export default TeamCreationForm