import { Button } from "@/components/ui/button";
import { AppNavigation } from "@/constants/navigationConstants";
import { WHATSAPP_Num_URL } from "@/constants/urlConstants";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <header className="text-[var(--primary-blue)] cta flex justify-between items-center p-4 text-lg bg-white shadow-md sticky top-0 z-50 font-[var(--BebasNeue)]">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="w-34" />
      </div>
      <nav className="md:block hidden">
        <ul className="flex gap-4 items-center text-2xl">
          <Link to={AppNavigation.Home} className="">
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="hidden md:block">
        <Button className="text-white bg-[var(--primary-blue)] text-2xl hover:bg-[var(--primary-blue-hover)] hover:text-[var(--primary-blue)] transition-colors duration-500">
          <a href={WHATSAPP_Num_URL} target="_blank" rel="noopener noreferrer">
            Book free call
          </a>
        </Button>
      </div>
      <div className="md:hidden">
        <Button>
          <Menu />
        </Button>
      </div>
    </header>
  );
}
