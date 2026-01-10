import CustomSelect from "@/components/ui/CustomSelect"

const TeamSection = () => {
  return(
    <section className="mt-10">
      <h2 className="font-bold pb-3 border-b border-gray-400">Team Assignment</h2>

      <div className=" mt-5">
        <CustomSelect
          labelText="Project Manager"
          placeholder="Select Project Manager"
          options={[]}
        />

        <div className="mt-3">
          <label htmlFor={"developers"} className="text-black text-sm mb-1 inline-block font-medium">Developers</label>
          <div className="border border-gray-400 p-4 min-h-20 max-h-60 overflow-y-auto rounded-md">
            <div className="flex border border-gray-300 p-4 rounded-md ">
              <input type="checkbox" name="developers"/>
              <p>Nnamdi Nnaweri</p>
            </div>
            <div className="flex border border-gray-300 p-4 rounded-md mt-4">
              <input type="checkbox" name="developers"/>
              <p>Nnamdi Nnaweri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection