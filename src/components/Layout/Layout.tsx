import React from "react";
import { Header } from "../Header/Header";

type User = {
  name: string;
};

export function Layout({ children }: { children?: React.ReactNode }) {
  const [user, setUser] = React.useState<User>();
  const handleLogin = () => {
    console.log("click");
  };

  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />
      <main>{children}</main>
    </>
  );
}
