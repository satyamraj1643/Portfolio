import PortfolioTabs from "@/components/PortfolioTabs";
import { absoluteUrl, getSiteUrl, siteDescription, siteName } from "@/lib/seo";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: "Satyam Raj",
        url: getSiteUrl(),
        email: "mailto:satyamraj1643@gmail.com",
        telephone: "+917050910817",
        jobTitle: "Associate Product Manager",
        description: siteDescription,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Indian Institute of Information Technology Bhagalpur",
        },
        sameAs: [
          "https://linkedin.com/in/satyamraj1643",
          "https://github.com/satyamraj1643",
          "https://www.instagram.com/satyam_jha1643/",
          "https://leetcode.com/u/satyamraj1532/",
        ],
        knowsAbout: [
          "Product Management",
          "AI Products",
          "PRD Writing",
          "Product Delivery",
          "AI Workflows",
          "Backend Engineering",
        ],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: siteName,
        url: getSiteUrl(),
        description: siteDescription,
        publisher: {
          "@id": absoluteUrl("/#person"),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PortfolioTabs />
    </>
  );
}
