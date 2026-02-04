import CustomTable from "@/components/shared/CustomTable";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import useProjectsTableService from "../services/useProjectsTableService";

const ProjectsTableArea = () => {
  const { fetchedData , isLoading} = useProjectsTableService()

  const columns: ColumnDef<{}, any>[] = useMemo(() => {
    return [
      {
        header: "Project Name",
        accessorKey: "name",
      },
      {
        header: "Department",
        accessorKey: "department",
      },
      {
        header: "Manager",
        accessorKey: "projectManager",
      },
      {
        header: "Deadline",
        accessorKey: "endDate",
      },
      // {
      //   header: "Actions",
      //   cell: () => (
      //     <button
      //       onClick={()=> null}
      //       className="text-blue-600 hover:text-blue-800 font-medium"
      //     >
      //       View Details
      //     </button>
      //   ),
      // },
    ];
  }, []);

  return(
    <section className="border border-gray-400 rounded-lg mt-10">
      <div className="px-5 py-7 border-b border-black">
        <h2 className="font-bold text-lg">Projects Overview</h2>
        <p className="text-sm">Monitor all active projects and thier current status</p>
      </div>

      <CustomTable
        columns={columns}
        data={fetchedData}
        isLoadingData={isLoading}
      />
    </section>
  )
}

export default ProjectsTableArea