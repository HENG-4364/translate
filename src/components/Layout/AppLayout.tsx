"use client";

import { PropsWithChildren } from "react";
import AppNavbar from "./Navbar/AppNavbar";
import AppFooter from "./Footer/AppFooter";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <AppNavbar />

      <div>{children}</div>

      <AppFooter />
    </main>
  );
}
