import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


function usePermissionControl(){
  const userRole = useSelector((state:RootState)=> state.auth.userRole);


  function hasPermission(permittedRoles:string[]): boolean{
    if(!userRole) return false;

    return permittedRoles.includes(userRole)
  }

  return {
    hasPermission
  }
}

export default usePermissionControl