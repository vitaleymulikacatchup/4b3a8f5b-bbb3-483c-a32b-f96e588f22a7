"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardThree from '@/components/sections/feature/FeatureCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "High-End Gaming PC Interior with Colorful RGB Lights" },
  { "id": "about-image", "url": "https://images.pexels.com/photos/34234301/pexels-photo-34234301.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two professionals working at a shared office desk, top view." },
  { "id": "features-image", "url": "https://images.pexels.com/photos/34301927/pexels-photo-34301927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of an AMD Radeon Graphics Card with RGB Lights" },
  { "id": "testimonial-image", "url": "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a realtor handing over a house key to a new homeowner, symbolizing ownership and investment." }
];
export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="SAASify"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          buttonText="Get Started"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to SAASify"
            description="Revolutionize your business with our cutting-edge solutions."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Get Started", href: "#contact" }
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            features={[
              { id: "01", title: "Advanced Analytics", description: "Insightful analytics to power your decisions.", imageSrc: assetMap.find(a => a.id === "features-image")?.url },
              { id: "02", title: "Seamless Integration", description: "Integrate with your existing tools effortlessly.", imageSrc: assetMap.find(a => a.id === "features-image")?.url }
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardThree
            title="Choose Your Plan"
            plans={[
              { id: "1", price: "$10/mo", name: "Starter Plan", features: ["Up to 10 users", "Email support"], buttons: [{ text: "Sign Up", href: "#" }] },
              { id: "2", badge: "Most popular plan", badgeIcon: {"name": "Sparkles"}, price: "$20/mo", name: "Pro Plan", features: ["Up to 50 users", "Priority support"], buttons: [{ text: "Sign Up", href: "#" }, { text: "Contact Sales", href: "#" }] }
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            members={[
              { id: "1", name: "Amélie Laurent", role: "CEO", imageSrc: assetMap.find(a => a.id === "about-image")?.url, socialLinks: [{ icon: "Twitter", url: "https://twitter.com/amelie" }, { icon: "Linkedin", url: "https://linkedin.com/in/amelie" }] }
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: "1", name: "Sarah Mitchell", role: "Operations Director", testimonial: "SAASify transformed our operations in incredible ways.", imageSrc: assetMap.find(a => a.id === "testimonial-image")?.url }
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplitForm
            title="Get in Touch"
            description="We'd love to hear from you. Send us a message."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Type your message...", rows: 5, required: true }}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] }
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
