import { FaPlus, FaRocket } from "react-icons/fa";

type NewEntityCompProps = {
  heading: string,
  subheading: string,
  buttonText: string,
  onButtonClicked?: ()=>void, 
}

const NewEntityComp = ({heading, subheading, buttonText, onButtonClicked}:NewEntityCompProps) => {
  return(
    <section className="flex justify-between items-center bg-gray-200/80 p-4 rounded-lg">
      <div className="flex items-center">
        <span className="bg-gray-300 p-2 rounded-md mr-3">
          <FaPlus />
        </span>
        <div>
          <p className="font-bold">{heading}</p>
          <p className="text-sm">{subheading}</p>
        </div>
      </div>

      <button onClick={onButtonClicked ? onButtonClicked : ()=>null} className="cursor-pointer flex items-center bg-gray-400 py-3 px-4 rounded-md">
        <FaRocket/>
        <p className="ml-2 font-semibold">{buttonText}</p>
      </button>

    </section>
  )
}

export default NewEntityComp