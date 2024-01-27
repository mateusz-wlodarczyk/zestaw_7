import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { ROUTES } from "../utils/constans";

export const ProtectedWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLogin } = useAuthContext();
  if (isLogin) return <> {children}</>;
  return (
    <>
      <p>unauthorized access</p>
      <Link to={`${ROUTES.start}`}> start page</Link>
    </>
  );
};
