// import { allRoles } from "@/permissions/roles";
import type { SideNavType } from "@/types/routes-types"
import { FaBuilding, FaClipboardList, FaPlusCircle, } from "react-icons/fa"
import { FaUserTie } from "react-icons/fa6"


const mainRoutes : SideNavType[] = [
  { name:'Projects' ,  navigateTo:'/projects', icon: FaPlusCircle, permittedRoles: ['all'] },
  // { name:'My Requests' ,  navigateTo:'branch-open-requests', icon: FaClipboardList, permittedRoles: ['all'] },
  // { name:'Dashboard' ,  navigateTo: 'wealth-dashboard', icon: FaChartPie, permittedRoles: ['all'] },
  // { name:'New Requests' ,  navigateTo:'wealth-new-request', icon: FaPlusCircle, permittedRoles: ['all'] },
  // { name:'Branch Requests' ,  navigateTo:'wealth-branch-open-requests', icon: FaTasks, permittedRoles: ['all'] },
  // { name:'My Requests' ,  navigateTo:'wealth-my-requests-pending-approval', icon: FaFolder, permittedRoles: ['all'] },
  // { name:'Liquidation' ,  navigateTo:'wealth-liquidation', icon: FaMoneyBillTransfer, permittedRoles: ['all'] },
  // { name:'Investment Rollover' ,  navigateTo:'wealth-rollover', icon: FaRepeat, permittedRoles: ['all'] },
  // { name:'Pending Authorisation' ,  navigateTo:'pending-authorisation', icon: FaClock, permittedRoles: ['all'] },
  // { name:'Investments' ,  navigateTo:'investments', icon: FaRepeat, permittedRoles: ['all'] },
]

const adminRoutes : SideNavType[] = [
  { name:'Team' ,  navigateTo:'team-management', icon: FaUserTie, permittedRoles: ['all'] },
  { name:'Departments' ,  navigateTo:'department-management', icon: FaBuilding, permittedRoles: ['all'] },
]  

export {
  mainRoutes,
  adminRoutes
}