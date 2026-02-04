import CustomInput from "@/components/ui/CustomInput"
import type { CreateProjectRequest } from "@/types/project-types";
import convertImageToBase64 from "@/utils/convertImageToBase64";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const ResourceSection = () => {
  const { register, setValue } = useFormContext<CreateProjectRequest>();
  const [fileName, setFileName] = useState("");

  return(
    <section className="mt-10">
      <h2 className="font-bold pb-3 border-b border-gray-400">Resources & Links</h2>

      <div className=" mt-5">
        <CustomInput
          {...register("sourceCode")}
          labeltext="Source Code Repository"
          placeholder="e.g Azure links"
        />

        <div className="mt-5">
          <p className="text-sm text-black font-medium mt-3">Project Documentation</p>

          <label className="inline-block w-full mt-2 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg py-4 text-center hover:border-blue-400 transition-colors">
            <p className="text-gray-500 mb-2">Upload project documents</p>
            <p className="text-sm text-gray-500">
              Click to upload
            </p>
            {fileName && <p>{fileName}</p>}
            <input
              type="file"
              accept=".jpg"
              onChange={(e)=>{
                const file = e.target.files ? e.target.files[0] : null;
                
                if(file){
                  setFileName(file.name)
                  convertImageToBase64(file,(ext, base64)=>{
                    if(ext && base64){
                      setValue("document.contentType", ext)
                      setValue("document.base64", base64)
                    }
                  })
                }

              }} 
              hidden
            />
          </label>
        </div>

        </div>
    </section>
  )
}

export default ResourceSection