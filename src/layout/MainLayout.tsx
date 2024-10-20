import { MainSidebar } from "@/components/MainSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode; // Define children prop to accept nested components
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <MainSidebar />
      <main className="w-screen h-screen p-2 bg-background">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
