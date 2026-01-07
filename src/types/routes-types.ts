import type { IconType } from "react-icons";

export type SideNavType = {
  name: string;
  navigateTo: string;
  icon: IconType;
  permittedRoles : string[]
}