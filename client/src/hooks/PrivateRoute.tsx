import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./redux_hooks";

export default function PrivateRoute() {
  const { currentUser, expiresAt } = useAppSelector((state) => state.user);

  if (!currentUser || Date.now() > expiresAt) {
    return <Navigate to="/login" replace={true} />;
  }
  return currentUser ? <Outlet /> : <Navigate to="/login" replace={true} />;
}
