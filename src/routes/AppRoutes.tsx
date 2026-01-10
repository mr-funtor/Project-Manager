import {BrowserRouter as Router, Routes, Route} from "react-router"
import { DepartmentPage, NewProjectPage, ProjectsPage, TeamsPage } from "../pages"
import AppLayout from "@/layouts/AppLayout"

const AppRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="projects" element={<ProjectsPage/>}/>
          <Route path="new-project" element={<NewProjectPage/>}/>
          <Route path="team-management" element={<TeamsPage/>}/>
          <Route path="department-management" element={<DepartmentPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes