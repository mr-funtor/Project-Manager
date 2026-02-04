import CustomSelect from "@/components/ui/CustomSelect"
import type { CreateProjectRequest } from "@/types/project-types";
import { useFormContext } from "react-hook-form";
import useTeamSectionService from "../services/useTeamSectionService";

const TeamSection = () => {
  const { register } = useFormContext<CreateProjectRequest>();
  const { state } = useTeamSectionService()

  return(
    <section className="mt-10">
      <h2 className="font-bold pb-3 border-b border-gray-400">Team Assignment</h2>

      <div className=" mt-5">
        <CustomSelect
          {...register("projectManagerId")}
          labelText="Project Manager"
          placeholder="Select Project Manager"
          options={state.managers}
        />

        <div className="mt-3">
          <label htmlFor={"developers"} className="text-black text-sm mb-1 inline-block font-medium">Developers</label>
          <div className="border border-gray-400 p-4 min-h-20 max-h-60 overflow-y-auto rounded-md">
            {
              state.developers.map((dev, index)=>{
                return(
                  <div
                    key={index}
                    className="flex border border-gray-300 p-4 rounded-md mb-5"
                  >
                    <input 
                      type="checkbox"
                      value={dev.id}
                      {...register("developers")}
                    />
                    <p className="ml-2">{dev.fullName}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection