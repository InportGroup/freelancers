const asciiLogo = `
 ___ _  _ ____  ___  ___ _____ ____ ____  ___  _   _ ____
|_ _| \\| |  _ \\/ _ \\|  _|_   _/ ___|  _ \\/ _ \\| | | |  _ \\
 | || .  | |_) | | | | |_  | || |  _| |_) | | | | | | |_) |
 |_||_|\\_|____/|_| |_|___| |_| \\____|____/|_| |_| |_|____/
`;

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#00FF41]/10 bg-[#0D0D0D] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ASCII Logo */}
        <pre className="text-[#00FF41]/20 text-[6px] sm:text-[8px] md:text-[10px] font-mono overflow-hidden whitespace-pre text-center mb-10 leading-tight select-none">
          {asciiLogo}
        </pre>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Tagline */}
          <div>
            <div className="text-[#00FF41] font-bold text-sm tracking-widest mb-1 neon-text">
              INPORTGROUP
            </div>
            <div className="text-[#00FF41]/40 text-xs tracking-widest">
              AI Department as a Service
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[#00FF41]/40 hover:text-[#00FF41] transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#00FF41]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#00FF41]/20 tracking-widest">
          <span>
            © {new Date().getFullYear()} InportGroup. All rights reserved.
          </span>
          <span className="text-[#00FFFF]/20">
            // Built with Next.js · Deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
}
