import { Button } from "@/components/ui/button";
import { AppNavigation } from "@/constants/navigationConstants";
import { WHATSAPP_Num_URL } from "@/constants/urlConstants";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMemo, useState } from "react";

export default function TopBar() {
  const [open, setOpen] = useState(false);
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
    <header className="text-[var(--primary-blue)] cta flex justify-between items-center p-4 text-lg bg-white shadow-md sticky top-0 z-50 font-[var(--BebasNeue)]">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="w-34" />
      </div>
      <nav className="md:block hidden">
        <ul className="flex gap-4 items-center text-2xl">
          {navlink.map((link) => (
            <Link to={link.path} key={link.name} className="">
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">
        <Button className="text-white bg-[var(--primary-blue)] text-2xl hover:bg-[var(--primary-blue-hover)] hover:text-[var(--primary-blue)] transition-colors duration-500">
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
            <ul className="flex flex-col gap-4 text-2xl">
              {navlink.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  onClick={() => setOpen(false)}
                >
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
          <Button className="text-white bg-[var(--primary-blue)] text-2xl hover:bg-[var(--primary-blue-hover)] hover:text-[var(--primary-blue)] transition-colors duration-500 mt-4">
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
