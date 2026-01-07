import { FaPlus, FaRocket } from "react-icons/fa"

const NewProjectComp = () => {
  return(
    <section className="flex justify-between items-center bg-gray-200/80 p-4 rounded-lg">
      <div className="flex items-center">
        <span className="bg-gray-300 p-2 rounded-md mr-3">
          <FaPlus />
        </span>
        <div>
          <p className="font-bold">Start New Project</p>
          <p className="text-sm">Create and configure next project</p>
        </div>
      </div>

      <div className="cursor-pointer flex items-center bg-gray-400 py-3 px-4 rounded-md">
        <FaRocket/>
        <p className="ml-2 font-semibold">Create New Project</p>
      </div>
    </section>
  )
}

export default NewProjectComp