import CustomTable from "@/components/shared/CustomTable";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

// logic
import useTeamTableService from "../services/useTeamTableService";
import type { TeamMemberType } from "@/types/team-types";

const TeamTableArea = () => {
  const {fetchedData, isLoading} = useTeamTableService()

  const columns: ColumnDef<TeamMemberType, any>[] = useMemo(() => {
    return [
      {
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Role",
        accessorKey: "role",
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
        <h2 className="font-bold text-lg">Team Overview</h2>
        <p className="text-sm">See Team members</p>
      </div>

      <CustomTable
        columns={columns}
        data={fetchedData}
        isLoadingData={isLoading}
      />
    </section>
  )
}

export default TeamTableArea