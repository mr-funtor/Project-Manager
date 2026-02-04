import { useFormContext } from "react-hook-form"

// types
import type { CreateProjectRequest } from "@/types/project-types"
import type { DepartmentResponse } from "@/types/department-types"

// components
import CustomInput from "@/components/ui/CustomInput"
import CustomSelect from "@/components/ui/CustomSelect"
import CustomTextArea from "@/components/ui/CustomTextArea"
import { useGetAllDepartmentsAxios } from "@/api/queries/departmentAxios"

const BasicInformationSection = () => {
  const { register } = useFormContext<CreateProjectRequest>();
  const { data } = useGetAllDepartmentsAxios<DepartmentResponse[]>();

  return(
    <section>
      <h2 className="font-bold pb-3 border-b border-gray-400">Basic Information</h2>

      <div className="grid grid-cols-2 gap-6 mt-5">
        <CustomInput
          {...register("name")}
          labeltext="Project Name"
          placeholder="Enter Project Name"
          maxLength={50}
        />
        <CustomSelect
          {...register("departmentId")}
          labelText="Department"
          placeholder="Select Department"
          options={data ? data.data.map((dept)=>({key: dept.name, value: dept.id})) : []}
        />
        <CustomInput
          {...register("projectOwner")}
          labeltext="Project Owner"
          placeholder="Enter Project Owner"
          maxLength={50}
          containerstyle="col-span-2"
        />
        <CustomTextArea
          {...register("description")}
          labelText="Project Description"
          placeholder="Describe goals, scope, requirements..."
          maincontainerstyle="col-span-2"
        />
        <CustomInput
          {...register("startDate")}
          labeltext="Start Date"
          type="date"
        />
        <CustomInput
          {...register("endDate")}
          labeltext="End Date"
          type="date"
        />
      </div>
    </section>
  )
}

export default BasicInformationSection