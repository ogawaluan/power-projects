import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/auth";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <Header />
        {children}
      </>
    );
  }
}