import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/casos", label: "Casos" },
  { to: "/contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        height: scrolled ? 72 : 88,
        background: scrolled
          ? "rgba(8, 12, 24, 0.97)"
          : "linear-gradient(180deg, rgba(8,12,24,0.92) 0%, rgba(8,12,24,0) 100%)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        borderBottom: scrolled
          ? "1px solid rgba(201, 168, 76, 0.25)"
          : "none",
        border: scrolled ? undefined : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="container h-full flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight">
          <span
            className="font-display"
            style={{
              fontSize: "22px",
              letterSpacing: "0.08em",
              color: "#FFFFFF",
              fontWeight: 600,
              textShadow: "0 1px 6px rgba(0,0,0,0.8)",
            }}
          >
            ORTOPECTUS
          </span>
          <span
            className="hidden sm:block"
            style={{
              fontSize: "9px",
              letterSpacing: "0.25em",
              color: "#C9A84C",
            }}
          >
            CLÍNICA INTEGRAL Y ESTÉTICA TORÁCICA
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative font-sans transition-all duration-300 ease-out rounded-full ${
                  isActive ? "nav-active" : "nav-inactive"
                }`
              }
              style={{
                fontSize: "13px",
                letterSpacing: "0.05em",
                padding: "6px 16px",
                fontWeight: 500,
              }}
              data-scrolled={scrolled ? "true" : "false"}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 rounded-full"
                      style={{ width: 4, height: 4, background: "#C9A84C" }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant={scrolled ? "gold" : "goldOutline"} size="default">
            <Link to="/contacto">
              <Phone className="w-4 h-4" />
              Agendar Consulta
            </Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-gold relative w-8 h-8 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span
                key="m"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Menu className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="lg:hidden fixed inset-0 top-0 z-40"
            style={{ backgroundColor: "rgba(8, 12, 24, 0.98)" }}
          >
            <div
              className="container pt-28 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `text-3xl font-display ${isActive ? "text-gold" : "text-foreground"}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * links.length, duration: 0.4 }}
              >
                <Button asChild variant="gold" size="lg" className="mt-4">
                  <Link to="/contacto">
                    <Phone className="w-4 h-4" />
                    Agendar Consulta
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
