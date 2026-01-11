import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table"


type CustomTableProps<K> = {
  data: K[],
  columns: ColumnDef<K, any>[],
  isLoadingData ?: boolean
}

const CustomTable = <K extends unknown>({data, columns, isLoadingData}:CustomTableProps<K>) => {

  const {getHeaderGroups, getRowModel} = useReactTable({
    columns, 
    data,
    getCoreRowModel: getCoreRowModel()
  })

  return(
    <div >
      {isLoadingData && <h2 className="w-full font-bold text-center py-5">Fetching Data</h2> }

      <table className="w-full rounded-lg">
        <thead className="border-b border-gray-500">
          {
            getHeaderGroups().map(headerGroup => {
              return (
                <tr key={headerGroup.id} className="px-10 mt-10">
                  {
                    headerGroup.headers.map(header =>(
                      <th style={{
                        width: header.getSize(),
                      }} key={header.id} className="px-4 py-2 font-medium text-black text-sm text-left uppercase bg-gray-200/80">
                        {
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )
                        }
                      </th>
                    ))
                  }
                </tr>
              )
            })
          }
        </thead>

        <tbody>
          {
            getRowModel().rows.map(row=>{
              return(
                <tr key={row.id} >
                  {
                    row.getVisibleCells().map(cell =>(
                      <td key={cell.id} className="px-4 py-2 border-b border-b-slate-300 text-black">
                        {
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )
                        }
                      </td>
                    ))
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>

      {data.length <= 0 && <h2 className="w-full font-bold text-center py-5">No data found</h2> }

    </div>
  )
}

export default CustomTable