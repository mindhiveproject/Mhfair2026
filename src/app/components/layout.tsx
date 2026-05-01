import { Outlet } from "react-router";
import { Navbar } from "./navbar";

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-primary-light selection:text-tertiary-dark font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
