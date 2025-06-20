import {
  MapPin,
  Smartphone,
  Mail,
  Twitter,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";

import { WHATSAPP_Num_URL } from "@/constants/urlConstants";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const contactInfo = [
    {
      icon: MapPin,
      text: "Based in Pakistan",
      href: "#",
    },
    {
      icon: Smartphone,
      text: (
        <>
          WhatsApp / Call: <br /> +92 XXX XXX XXXX
        </>
      ),
      href: "tel:+920000000000",
    },
    {
      icon: Mail,
      text: "support@acigroups.com",
      href: "mailto:support@acigroups.com",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/zia-khatri-226679300/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/M-Zia-Khatri/ACI-Group-Website",
      label: "Github",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#181c20] to-[#23272b] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[#151818]/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0052CC]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0052CC]/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      {/* Main content */}
      <div className="w-full max-w-[var(--max-width)] relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">
          {/* Company Info */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-fluid-xl font-bold mb-6 leading-snug">
              ACI Group — Transparent
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={idx}
                    href={item.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0052CC]/10">
                      <Icon className="h-5 w-5 text-[#0052CC]" />
                    </div>
                    <span className="text-fluid">{item.text}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-fluid-lg font-bold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                "About Us",
                "Services",
                "Contact",
                "Terms of Service",
                "Privacy Policy",
              ].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* CTA and Social */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-fluid-lg font-bold mb-6">Get Started</h4>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="bg-[#0052CC] hover:bg-[#0052CC]/90 text-white w-full mb-6 font-Karla"
              >
                <a
                  href={WHATSAPP_Num_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Call
                </a>
              </Button>
            </motion.div>

            <div className="flex justify-center items-center flex-col">
              <h5 className="text-fluid font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0052CC]/10 text-[#0052CC] hover:bg-[#0052CC] hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ACI Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
