import CustomTable from "@/components/shared/CustomTable";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

// logic
import useDepartmentTableService from "../services/useDepartmentTableService";
import type { DepartmentResponse } from "@/types/department-types";

const DepartmentTableArea = () => {
  const { fetchedData } = useDepartmentTableService()

  const columns: ColumnDef<DepartmentResponse, any>[] = useMemo(() => {
    return [
      {
        header: "Department Name",
        accessorKey: "name",
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
        <h2 className="font-bold text-lg">Departments Overview</h2>
        <p className="text-sm">See Departments</p>
      </div>

      <CustomTable
        columns={columns}
        data={fetchedData}
      />

    </section>
  )
}

export default DepartmentTableArea