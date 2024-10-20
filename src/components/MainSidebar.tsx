import { Gauge, Microscope, ListTodo } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { signout } from "@/api/auth/signout";
import toast from "react-hot-toast";

// Menu items.
const items = [
  {
    title: "Train",
    url: "/train",
    icon: Gauge,
  },
  {
    title: "Predict",
    url: "/predict",
    icon: Microscope,
  },
  {
    title: "Status",
    url: "/status",
    icon: ListTodo,
  },
];

export function MainSidebar() {
  const handleSignout = () => {
    signout();
    toast.success("Signout success");
    window.location.href = "/";
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Machine Learning API</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant={"outline"} onClick={handleSignout}>
          Sign out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
