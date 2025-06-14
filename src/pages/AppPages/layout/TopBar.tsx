import { Button } from "@/components/ui/button";
import { AppNavigation } from "@/constants/navigationConstants";
import { WHATSAPP_Num_URL } from "@/constants/urlConstants";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMemo, useState } from "react";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  const navlink = useMemo(
    () => [
      { name: "Home", path: AppNavigation.Home },
      { name: "About", path: AppNavigation.About },
      { name: "Services", path: AppNavigation.Services },
      { name: "Contact", path: AppNavigation.Contact },
    ],
    []
  );
  return (
    <header className="text-white flex h-[12vh] justify-between items-center p-4 text-lg bg-[var(--dark-navy)] shadow-md sticky top-0 z-50 border-b-[1px] border-[#252323]">
      <div className="flex items-center gap-4">
        <img
          src={logoHover ? "/logo-blue.svg" : "/logo.svg"}
          alt="Logo"
          className={`w-34 transition-all duration-500 ease-in-out ${
            logoHover ? "scale-105 opacity-80" : "scale-100 opacity-100"
          }`}
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          style={{
            transition: "opacity 0.5s, transform 0.5s",
          }}
        />
      </div>
      <nav className="md:block hidden">
        <ul className="flex gap-3 items-center">
          {navlink.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              className="transition-transform duration-500 hover:scale-118 "
            >
              <li className="transition-colors duration-500 hover:text-[var(--primary-blue)] font-[var(--Roboto)] text-[16px]">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">
        <Button className="btn cta">
          <a href={WHATSAPP_Num_URL} target="_blank" rel="noopener noreferrer">
            Book free call
          </a>
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="flex flex-col gap-6">
          <nav>
            <ul className="flex flex-col gap-4 text-2xl font-sans">
              {navlink.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  onClick={() => setOpen(false)}
                >
                  <li className="font-sans">{link.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
          <Button className="text-white bg-[var(--primary-blue)] text-2xl hover:bg-[var(--primary-blue-hover)] hover:text-[var(--primary-blue)] transition-colors duration-500 mt-4 font-bebas">
            <a
              href={WHATSAPP_Num_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book free call
            </a>
          </Button>
        </SheetContent>
      </Sheet>
    </header>
  );
}
