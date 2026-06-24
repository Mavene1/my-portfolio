import { Mail, Phone, MapPin, MoveRight } from "@/lib/icons";
import MagicButton from "@/components/common/magic-button";
import { ScrollReveal, FadeUp } from "@/components/motion";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: "maveneomondi111@gmail.com", href: "mailto:maveneomondi111@gmail.com" },
  { icon: Phone, label: "Phone", value: "+254 712 162 894", href: "tel:+254712162894" },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: "#" },
];

export default function Footer() {
  return (
    <div className="w-full relative" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <img src="/footer-grid.svg" alt="" aria-hidden className="w-full h-full opacity-50" />
      </div>

      <ScrollReveal className="flex flex-col items-center text-center mb-16">
        <h1 className="heading lg:max-w-[50vw]">
          Ready to build something{" "}
          <span className="text-purple">exceptional together?</span>
        </h1>
        <p className="text-white-200 mt-6 mb-8 max-w-xl text-base leading-relaxed">
          Whether you&apos;re looking for a Senior Frontend Engineer, a Frontend Lead,
          or an architect to drive your next platform — I&apos;d love to connect.
        </p>
        <a href="mailto:maveneomondi111@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<MoveRight className="h-4 w-4" />}
            position="right"
          />
        </a>
      </ScrollReveal>

      {/* Contact info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
          <FadeUp key={label}>
            <a
              href={href}
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#0a0d1f] border border-white/[0.06] hover:border-purple/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#10132E] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-purple/20 transition-colors">
                <Icon className="h-4 w-4 text-purple" />
              </div>
              <div>
                <p className="text-xs text-white-200 mb-0.5">{label}</p>
                <p className="text-sm text-white font-medium">{value}</p>
              </div>
            </a>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
