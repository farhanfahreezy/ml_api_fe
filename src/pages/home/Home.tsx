import { authself } from "@/api/auth/self";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  authself()
    .then(() => {
      // Handle the successful response here
      navigate("/status");
    })
    .catch(() => {
      // Handle the error response here
      navigate("/auth/sign-in");
    });

  return null;
};

export default Home;
