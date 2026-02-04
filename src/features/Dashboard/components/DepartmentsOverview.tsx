import useDepartmentsOverviewService from "../services/useDepartmentsOverviewService"

const DepartmentsOverview = () => {
  const { fetchedData, isLoading } = useDepartmentsOverviewService()

  return(
    <section className="mt-10">
      <h2 className="font-bold text-lg border-b border-gray-400  pb-2">Department Overview</h2>

      {isLoading && <p className="font-bold text-center">Loading Statistics...</p>}

      <div className="grid grid-cols-4 gap-6 mt-5">
        {
          fetchedData && fetchedData.map((department,index)=>{
            return(
              <article
                key={index}
                className="border border-gray-400 p-5 rounded-md"
              >
                <h3 className="text-sm truncate">{department.departmentName}</h3>
                <p className="font-bold text-2xl">{department.numberOfProjects}</p>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default DepartmentsOverview