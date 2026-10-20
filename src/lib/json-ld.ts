// ============================================================
// MUTIARA REFLEKSI - JSON-LD Structured Data Builders (SEO)
// ============================================================
import { site } from "@/lib/site";
import { services } from "@/lib/data/services";
import { faqs } from "@/lib/data/content";
import { blogPosts } from "@/lib/data/blog";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.legalName,
    description: site.description,
    url: site.url,
    logo: `${site.url}/branding/logo-master.jpg`,
    image: [`${site.url}/images/hero.jpg`, `${site.url}/images/about-interior.jpg`],
    telephone: site.phone,
    email: site.email,
    slogan: site.tagline,
    foundingDate: site.founded,
    priceRange: site.priceRange,
    currenciesAccepted: site.currenciesAccepted,
    paymentAccepted: site.paymentAccepted,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: site.hours.open,
        closes: site.hours.close,
      },
    ],
    areaServed: [
      { "@type": "City", name: "Jakarta Timur" },
      { "@type": "AdministrativeArea", name: "DKI Jakarta" },
    ],
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Pijat & Terapi",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.excerpt },
        price: s.price,
        priceCurrency: "IDR",
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "412",
      bestRating: "5",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "id-ID",
    publisher: { "@id": `${site.url}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceJsonLd(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.excerpt,
    image: `${site.url}${s.image}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: "Jakarta Timur" },
    serviceType: s.name,
    offers: s.durationOptions.map((d) => ({
      "@type": "Offer",
      name: `${s.name} ${d.duration}`,
      price: d.price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: site.url },
      ...items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: it.name,
        item: it.url,
      })),
    ],
  };
}

export function articleJsonLd(slug: string) {
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.excerpt,
    image: `${site.url}${p.image}`,
    datePublished: p.date,
    dateModified: p.date,
    inLanguage: "id-ID",
    author: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/branding/logo-master.jpg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${p.slug}` },
    keywords: p.keywords.join(", "),
    articleSection: p.category,
  };
}

export function itemListJsonLd(posts: { slug: string; title: string }[], listName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/blog/${p.slug}`,
      name: p.title,
    })),
  };
}
