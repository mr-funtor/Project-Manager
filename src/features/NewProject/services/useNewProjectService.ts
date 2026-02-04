import { useCreateProjectQuery } from "@/api/queries/projectQueries";
import { LoaderInit } from "@/components/shared/CustomLoader";
import { ToastInit } from "@/components/shared/CustomToast";
import type { CreateProjectRequest } from "@/types/project-types"
import { isAxiosError } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const useNewProjectService = () => {
  const navigate = useNavigate()
  const { mutate, isPending } = useCreateProjectQuery()

  function createNewProject(values: CreateProjectRequest){
    const managerAsNumber = typeof values.projectManagerId === "string" ? parseInt(values.projectManagerId) : values.projectManagerId;
    const departmentAsNumber = typeof values.departmentId === "string" ? parseInt(values.departmentId) : values.departmentId;

    const developerIds = values.developers.map((dev)=>(typeof dev === "string" ? parseInt(dev) : dev));

    const payload = {
      ...values,
      departmentId: departmentAsNumber,
      projectManagerId: managerAsNumber,
      developers : developerIds
    }


    console.log(payload)

    mutate(payload,{
      onSuccess:()=>{
        ToastInit.openToast("Project created successfully");
        navigate("/projects")
      },
      onError:(error)=>{
        if (isAxiosError(error)) {
          const theError = error;
  
          if (theError.response && theError.response.data) {
            ToastInit.openToast(
              theError?.response?.data?.errors[0] || theError?.response?.data?.message || "Department creation failed",
              "error"
            );
          } else {
            ToastInit.openToast("Project creation failed","error")
          }
        } else {
          ToastInit.openToast("Project creation failed","error")
        }
      }
    })
  }

  useEffect(()=>{
    if(isPending){
      LoaderInit.triggerLoader()
    }else{
      LoaderInit.closeLoader();
    }
  },[isPending])

  return{
    createNewProject
  }
}

export default useNewProjectService