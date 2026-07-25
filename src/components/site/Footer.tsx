import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/ashrithlogo.jpg";

export function Footer() {
  const year = new Date().getFullYear();
  const links: Array<[string, string]> = [
    ["/", "Home"], ["/institutes", "Institutes"], ["/campus", "Campus"],
    ["/gallery", "Gallery"], ["/contact", "Contact"], ["/application", "Apply Now"],
  ];
  return (
    <footer className="bg-primary-deep text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ashrith Trust" className="h-14 w-14 rounded-full bg-white p-0.5" />
            <div>
              <div className="font-display font-bold text-white">Ashrith Trust <span className="text-accent">®</span></div>
              <div className="text-[11px] uppercase tracking-widest text-accent">Since 2009</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            A registered trust dedicated to excellence in nursing and paramedical education —
            shaping compassionate healthcare professionals for tomorrow.
          </p>
          <Link to="/" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">Read more →</Link>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {links.map(([to, label]) => (
              <li key={to}><Link to={to as never} className="transition hover:text-accent">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> NH-66, Kota, Udupi Taluk & District, 576221, Karnataka, India</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> <span>+91 820 2586777<br />+91 94800 87860<br />Director: +91 98800 58567</span></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> info@ashritheducationtrust.org</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-white">Locate Us</h4>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Ashrith Trust Kota location"
              src="https://www.google.com/maps?q=Kota,+Udupi,+Karnataka+576221&output=embed"
              width="100%" height="180" loading="lazy" className="block"
            />
          </div>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="rounded-full bg-white/10 p-2 transition hover:bg-accent">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-primary-deep">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-white/70 md:flex md:items-center md:justify-between md:text-left">
          <span>ASHRITH TRUST (R) — Registered under Karnataka State Societies Act. NH-66, Kota, Udupi – 576221.</span>
          <span>© {year} Ashrith Trust (R). All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
