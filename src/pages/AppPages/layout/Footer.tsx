import { MapPin, Smartphone, Mail, Facebook } from "lucide-react";

export const Footer = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 flex-shrink-0" />,
      text: "Based in Pakistan",
      href: "#",
    },
    {
      icon: <Smartphone className="h-5 w-5 flex-shrink-0" />,
      text: "WhatsApp / Call: +92 XXX XXX XXXX",
      href: "tel:+920000000000",
    },
    {
      icon: <Mail className="h-5 w-5 flex-shrink-0" />,
      text: "support@acigroups.com",
      href: "mailto:support@acigroups.com",
    },
  ];

  return (
    <footer className="bg-[var(--dark-navy)] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-white">
              ACI Group — Transparent
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="group flex items-center gap-3 transition-colors duration-300 hover:text-primary-blue"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Social Media</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors duration-300 hover:text-primary-blue"
              >
                <Facebook className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ACI Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
