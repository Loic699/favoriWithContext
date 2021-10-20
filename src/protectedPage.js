import React, { useContext } from "react";
import { AuthContext } from "./context";

export default function ProtectedPage() {
  const authContext = useContext(AuthContext);

  return authContext.isLoggedIn && <h2>Protected resource</h2>;
}
