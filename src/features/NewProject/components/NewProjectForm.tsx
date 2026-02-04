import BasicInformationSection from "./BasicInformationSection"
import TeamSection from "./TeamSection"
import { FormProvider, useForm } from "react-hook-form"
import type { CreateProjectRequest } from "@/types/project-types"
import ResourceSection from "./ResourceSection"
import CustomButton from "@/components/ui/CustomButton"
import useNewProjectService from "../services/useNewProjectService"


const NewProjectForm = () => {
  const { createNewProject } = useNewProjectService()
  const methods = useForm<CreateProjectRequest>()

  return(
    <FormProvider
      {...methods}
    >
      <form  
        onSubmit={methods.handleSubmit(createNewProject)}
        className="border border-gray-400 rounded-lg p-5"
      >
        <BasicInformationSection/>

        <TeamSection/>

        <ResourceSection/>

        <CustomButton
          buttonText="Submit"
          type="submit"
          containerStyle="mt-16"
        />
      </form>
    </FormProvider>
  )
}

export default NewProjectForm