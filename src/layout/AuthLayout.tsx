import { authself } from "@/api/auth/self";
import React from "react";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode; // Define children prop to accept nested components
}

const AuthLayout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  authself().then(() => {
    // Handle the error response here
    navigate("/status");
  });

  return children;
};

export default AuthLayout;
