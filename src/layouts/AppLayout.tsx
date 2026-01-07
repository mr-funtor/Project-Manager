import SideNavbar from "@/components/shared/SideNavbar"
import { Outlet } from "react-router"

const AppLayout = () => {
  return(
    <div className="bg-dark-background min-h-screen w-full">
      <SideNavbar/>
      <div className="ml-58">
        <Outlet/>
      </div>
    </div>
  )
}

export default AppLayout