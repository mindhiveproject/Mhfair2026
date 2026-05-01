import { Link } from "react-router";
import { Menu, X, Users, BookOpen, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import mindHiveLogo from "figma:asset/2ab1085584c4c244f230d1272e5d39acf957816b.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Schedule", href: "#schedule", icon: Clock },
    { name: "Materials", href: "#materials", icon: BookOpen },
    // { name: "Speakers", href: "#speakers", icon: Users },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img
              src={mindHiveLogo}
              alt="MindHive Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
              {null /* Profile icon removed as requested */}
              <Button
                size="sm"
                className="bg-primary hover:bg-primary-dark text-white font-semibold rounded-full px-6 border-none shadow-md"
                asChild
              >
                <a
                  href="https://drive.google.com/drive/folders/1apHzrtJ7W_o9u2BlZmHAU-gwCpSFq8qF?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Participating Teacher Space
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-info hover:bg-primary-dark text-white font-bold rounded-full px-6 border-none shadow-md"
                asChild
              >
                <a
                  href="https://docs.google.com/forms/d/1p9XOu6Ds1_O8jjzvwTekdj4mXbHgliQEoJ8DsVbyWAY/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSVP here!
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b absolute top-full left-0 right-0 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-slate-700 hover:text-primary transition-colors flex items-center gap-3 py-2 border-b border-slate-50"
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-6 rounded-xl mt-4 border-none">
              Join Event
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}