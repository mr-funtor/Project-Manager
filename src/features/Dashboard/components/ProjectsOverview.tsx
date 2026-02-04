import useProjectsOverviewService from "../services/useProjectsOverviewService"

const ProjectsOverview = () => {
  const { fetchedData, isLoading } = useProjectsOverviewService()

  return(
    <section>
      <h2 className="font-bold text-lg border-b border-gray-400  pb-2">Projects Overview</h2>

      {isLoading && <p className="font-bold text-center">Loading Statistics...</p>}

      {
        (Object.keys(fetchedData).length > 0 && !isLoading) && (<div className="grid grid-cols-4 gap-6 mt-5">
          <article className="border border-gray-400 p-5 rounded-md">
            <h3>Total Projects</h3>
            <p className="font-bold text-2xl">{fetchedData["Total Projects"]}</p>
          </article>
          <article className="border border-green-400 p-5 rounded-md">
            <h3>Completed</h3>
            <p className="font-bold text-2xl">{fetchedData.Completed}</p>
          </article>
          <article className="border border-gray-400 p-5 rounded-md">
            <h3>Ongoing</h3>
            <p className="font-bold text-2xl">{fetchedData.Ongoing}</p>
          </article>
          <article className="border border-red-400 p-5 rounded-md">
            <h3>Overdue</h3>
            <p className="font-bold text-2xl">{fetchedData.Overdue}</p>
          </article>

        </div>)
      }

    </section>
  )
}

export default ProjectsOverview