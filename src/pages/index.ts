import {lazy} from "react";

const ProjectsPage = lazy(()=> import("./ProjectsPage"));
const NewProjectPage = lazy(()=> import("./NewProjectPage"));
const TeamsPage = lazy(()=> import("./TeamsPage"))
const DepartmentPage = lazy(()=> import("./DepartmentPage"))

export{
  ProjectsPage,
  NewProjectPage,
  TeamsPage,
  DepartmentPage
}