import GlitchText from "./GlitchText";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <div className="text-xs tracking-[0.3em] text-[#00FF41]/50 uppercase mb-3">
        // {label}
      </div>
      <GlitchText
        text={title}
        tag="h2"
        className="section-title neon-text block mb-4"
      />
      {subtitle && (
        <p className="text-[#00FF41]/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-[#00FF41]/30" />
        <div className="w-2 h-2 rotate-45 border border-[#00FF41]" />
        <div className="h-px w-16 bg-[#00FF41]/30" />
      </div>
    </div>
  );
}
