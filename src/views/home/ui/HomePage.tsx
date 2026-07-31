import { PageShell } from "@/widgets/page-shell";
import { Hero } from "@/widgets/hero";
import { Marquee } from "@/widgets/marquee";
import { PainSection } from "@/widgets/pain-section";
import { HowItWorksSection } from "@/widgets/how-it-works";
import { ServicesSection } from "@/widgets/services-section";
import { AudiencesSection } from "@/widgets/audiences-section";
import { MetricsSection } from "@/widgets/metrics-section";
import { ProductPreviewSection } from "@/widgets/product-preview";
import { OnboardingSection } from "@/widgets/onboarding-section";
import { TrustSection } from "@/widgets/trust-section";
import { IntegrationsSection } from "@/widgets/integrations-section";
import { PricingTeaserSection } from "@/widgets/pricing-teaser";
import { StorySection } from "@/widgets/story-section";
import { GuidesTeaserSection } from "@/widgets/guides-teaser";
import { BlogTeaserSection } from "@/widgets/blog-teaser";
import { FaqSection } from "@/widgets/faq-section";
import { FinalCtaSection } from "@/widgets/final-cta";

export function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Marquee />
      <PainSection />
      <HowItWorksSection />
      <ServicesSection />
      <AudiencesSection />
      <MetricsSection />
      <ProductPreviewSection />
      <OnboardingSection />
      <TrustSection />
      <IntegrationsSection />
      <PricingTeaserSection />
      <StorySection />
      <GuidesTeaserSection />
      <BlogTeaserSection />
      <FaqSection />
      <FinalCtaSection />
    </PageShell>
  );
}
