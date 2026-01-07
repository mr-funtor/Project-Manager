import {BrowserRouter as Router, Routes, Route} from "react-router"
import { ProjectsPage } from "../pages"
import AppLayout from "@/layouts/AppLayout"

const AppRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="projects" element={<ProjectsPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes