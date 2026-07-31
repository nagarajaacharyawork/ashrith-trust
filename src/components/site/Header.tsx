import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import logo from "@/assets/ashrithlogo.jpg";

type NavItem = { to: string; label: string; hasDropdown?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/institutes", label: "Institutes", hasDropdown: true },
  { to: "/campus", label: "Campus" },
  { to: "/application", label: "Application" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const institutes = [
  { to: "/institutes/nursing", label: "Ashrith College & School of Nursing" },
  { to: "/institutes/paramedical", label: "K. R. Hegde College of Paramedical Sciences" },
  { to: "/institutes/pu", label: "Ashrith Pre-University College" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [instOpen, setInstOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary-deep text-white/90 text-xs md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> NH-66, Kota, Udupi Taluk & District – 576221, Karnataka</span>
            <a href="tel:+919148087860" className="flex items-center gap-1.5 hover:text-accent"><Phone className="h-3.5 w-3.5" /> +91 91480 87860</a>
            <a href="tel:+919148087861" className="flex items-center gap-1.5 hover:text-accent"><Phone className="h-3.5 w-3.5" /> +91 91480 87861</a>
            <a href="mailto:info@ashritheducationtrust.org" className="flex items-center gap-1.5 hover:text-accent"><Mail className="h-3.5 w-3.5" /> info@ashritheducationtrust.org</a>
          </div>
          <span className="uppercase tracking-widest text-[10px] text-accent">Excellence in Professional Education · Since 2009</span>
        </div>
      </div>

      <div className={`bg-white backdrop-blur transition-all ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6" style={{ height: scrolled ? 68 : 84 }}>
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Ashrith Trust logo" className={`transition-all ${scrolled ? "h-11 w-11" : "h-14 w-14"}`} />
            <div className="hidden sm:block">
              <div className="font-display text-base font-bold leading-tight text-primary md:text-lg">
                Ashrith Group of Institutions
              </div>
              <div className="text-[11px] uppercase tracking-widest text-accent">
                Study to Serve the Humanity
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <div key={n.to} className="relative"
                onMouseEnter={() => n.hasDropdown && setInstOpen(true)}
                onMouseLeave={() => n.hasDropdown && setInstOpen(false)}
              >
                <Link
                  to={n.to as never}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-primary/90 transition hover:bg-cream hover:text-primary"
                  activeProps={{ className: "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-accent bg-cream" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                  {n.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {n.hasDropdown && instOpen && (
                  <div className="absolute left-0 top-full w-72 rounded-xl border bg-white p-2 shadow-lg">
                    {institutes.map((i) => (
                      <Link key={i.to} to={i.to as never} className="block rounded-lg px-3 py-2 text-sm text-primary/90 hover:bg-cream hover:text-accent">
                        {i.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/application" className="btn-primary hidden text-sm md:inline-flex">
              Admissions Open
            </Link>
            <button
              className="rounded-md p-2 text-primary lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t bg-white lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4">
              {nav.map((n) => (
                <Link key={n.to} to={n.to as never} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm font-medium text-primary hover:bg-cream">
                  {n.label}
                </Link>
              ))}
              {institutes.map((i) => (
                <Link key={i.to} to={i.to as never} onClick={() => setOpen(false)} className="block rounded-md px-6 py-2 text-xs text-primary/70 hover:bg-cream">
                  → {i.label}
                </Link>
              ))}
              <Link to="/application" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full text-sm">
                Admissions Open
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
