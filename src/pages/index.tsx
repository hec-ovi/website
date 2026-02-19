import { DefaultSeo } from "@/components/seo/default-seo";
import { SiteFrame } from "@/components/layout/site-frame";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ReposSection } from "@/components/sections/repos-section";
import { StudiesSection } from "@/components/sections/studies-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNavigation } from "@/components/sections/site-navigation";

export default function Home() {
  return (
    <>
      <DefaultSeo />
      <SiteFrame header={<SiteNavigation />} footer={<SiteFooter />}>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <ReposSection />
        <SkillsSection />
        <StudiesSection />
        <FaqSection />
        <ContactSection />
      </SiteFrame>
    </>
  );
}
