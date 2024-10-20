import { authself } from "@/api/auth/self";
import { MainSidebar } from "@/components/MainSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode; // Define children prop to accept nested components
}

const MainLayout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  authself().catch(() => {
    // Handle the error response here
    navigate("/auth/sign-in");
  });

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
