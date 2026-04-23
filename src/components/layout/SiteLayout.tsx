import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { ScrollToTop } from "./ScrollToTop";

export const SiteLayout = () => (
  <div className="min-h-screen flex flex-col bg-midnight text-foreground">
    <ScrollToTop />
    <Navbar />
    <main className="flex-1 pt-0">
      <Outlet />
    </main>
    <Footer />
    <FloatingActions />
  </div>
);
