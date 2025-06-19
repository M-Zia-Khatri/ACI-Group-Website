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
    <header className="text-white flex justify-between items-center px-3 md:px-6 py-0 md:py-3 text-base md:text-lg bg-[var(--dark-navy)] shadow-md sticky top-0 z-50 border-b-[1px] border-[#252323]">
      {/* logo */}
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={logoHover ? "/logo-blue.svg" : "/logo.svg"}
          alt="Logo"
          className={`w-[25vw] md:w-[22vw] lg:w-[20vw] transition-all duration-500 ease-in-out ${
            logoHover ? "scale-105 opacity-80" : "scale-100 opacity-100"
          }`}
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          style={{
            transition: "opacity 0.5s, transform 0.5s",
          }}
        />
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-3 md:gap-4 items-center">
          {navlink.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              className="transition-transform duration-500 hover:scale-110"
            >
              <li className="transition-colors duration-500 hover:text-[var(--primary-blue)] Newsreader text-fluid lg:text-fluid-lg">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {/* Desktop CTA Button */}
      <div className="hidden h-full md:block">
        <a href={WHATSAPP_Num_URL} target="_blank" rel="noopener noreferrer">
          <Button className="btn cta py-0 h-full hover:bg-[#1C1D1D] bg-[var(--dark-navy)] hover:text-[var(--primary-blue)] transition-colors duration-500 text-fluid-lg">
            Book free call
          </Button>
        </a>
      </div>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              className="p-0 px-0"
              onClick={() => setOpen(true)}
              variant="ghost"
            >
              <Menu size={"36px"} strokeWidth={2.5} />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="flex flex-col gap-6 pt-8 pb-6 px-4"
          >
            <nav>
              <ul className="flex flex-col gap-4 text-white text-base sm:text-lg md:text-xl font-sans">
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
            <Button className="text-white bg-[var(--primary-blue)] text-base sm:text-lg md:text-xl hover:bg-[var(--primary-blue-hover)] hover:text-[var(--primary-blue)] transition-colors duration-500 mt-4 font-bebas w-full">
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
      </div>
    </header>
  );
}
