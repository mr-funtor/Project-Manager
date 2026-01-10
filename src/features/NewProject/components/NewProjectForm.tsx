import CustomInput from "@/components/ui/CustomInput"
import BasicInformationSection from "./BasicInformationSection"
import TeamSection from "./TeamSection"


const NewProjectForm = () => {
  return(
    <form className="border border-gray-400 rounded-lg p-5">
      <BasicInformationSection/>

      <TeamSection/>

      <section className="mt-10">
        <h2 className="font-bold pb-3 border-b border-gray-400">Resources & Links</h2>

        <div className=" mt-5">
          <CustomInput
            labeltext="Source Code Repository"
            placeholder="e.g Azure links"
          />

          <div className="mt-5">
            <p className="text-sm text-black font-medium mt-3">Project Documentation</p>

            <div className="mt-2 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg py-4 text-center hover:border-blue-400 transition-colors">
              <p className="text-gray-500 mb-2">Upload project documents</p>
              <p className="text-sm text-gray-500">
                Click to upload
              </p>
            </div>
          </div>

          </div>
      </section>
    </form>
  )
}

export default NewProjectForm