import usePermissionControl from "@/permissions/usePermissionControl"
import type { PropsWithChildren } from "react"

type RestrictedCompProps ={
  permittedRoles : string[]
} & PropsWithChildren

const RestrictedComp = ({permittedRoles, children}:RestrictedCompProps) => {
  const { hasPermission } = usePermissionControl()


  if(permittedRoles.includes('all')) return children;

  if(hasPermission(permittedRoles)) return children
  
  return null
}

export default RestrictedComp