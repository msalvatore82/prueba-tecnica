import { IconType } from "react-icons";

export interface SidebarMenuItem{
    id:String;
    label:string;
    icon:IconType;
    url: String;
}

export interface SidebarMenuCard{
    id:string;
    displayname: string;
    photoUrl: String;
    title: string;
    url: string;
}