import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Giorgia Cherubino - Life Coach | Trasforma la Tua Vita con Autostima e Direzione",
    template: "%s | Giorgia Cherubino"
  },
  description: "🌟 Trasforma la tua vita con il metodo unico di Giorgia Cherubino. Life Coach certificata specializzata in autostima, direzione e crescita personale. Prima consulenza GRATUITA ✨",
  keywords: [
    "life coach", "crescita personale", "autostima", "coaching individuale", 
    "sviluppo personale", "Giorgia Cherubino", "coach certificata", 
    "trasformazione personale", "obiettivi di vita", "mindfulness", 
    "benessere mentale", "consulenza gratuita", "coaching online",
    "empowerment", "motivazione", "successo personale", "life coach italia",
    "coach professionista", "percorso di crescita", "coaching Roma",
    "coaching Milano", "coaching Torino", "coaching Napoli", "coaching online Italia"
  ],
  applicationName: "Giorgia Cherubino - Life Coach",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true
  },
  authors: [{ name: "Giorgia Cherubino", url: "https://giorgiacherubinocoach.com" }],
  creator: "Giorgia Cherubino",
  publisher: "Giorgia Cherubino",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://giorgiacherubinocoach.com",
    siteName: "Giorgia Cherubino - Life Coach",
    title: "🌟 Trasforma la Tua Vita con Giorgia Cherubino | Life Coach Certificata",
    description: "Metodo unico per ottenere autostima e direzione. Prima consulenza GRATUITA. Risultati concreti in 30 giorni. ✨ Scopri come trasformare la tua vita oggi!",
    images: [
      {
        url: "/giorgia-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Giorgia Cherubino - Life Coach Certificata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🌟 Giorgia Cherubino - Life Coach | Trasforma la Tua Vita",
    description: "Metodo unico per autostima e direzione. Prima consulenza GRATUITA ✨",
    images: ["/giorgia-profile.jpg"],
    creator: "@giorgia.cherubino",
  },
  alternates: {
    canonical: "https://giorgiacherubinocoach.com",
    languages: {
      'it-IT': 'https://giorgiacherubinocoach.com',
    },
  },
  category: "Health & Wellness",
  classification: "Life Coaching",
  other: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? {
      'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION
    } : {}),
    ...(process.env.FACEBOOK_DOMAIN_VERIFICATION ? {
      'facebook-domain-verification': process.env.FACEBOOK_DOMAIN_VERIFICATION
    } : {})
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Giorgia Cherubino - Life Coach",
  "description": "Life Coach certificata specializzata in crescita personale, autostima e direzione. Metodo unico per trasformare la tua vita.",
  "url": "https://giorgiacherubinocoach.com",
  "logo": "https://giorgiacherubinocoach.com/giorgia-profile.jpg",
  "image": "https://giorgiacherubinocoach.com/giorgia-profile.jpg",
  "telephone": "+39-333-1234567",
  "email": "giorgiacherubinocoach@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IT",
    "addressLocality": "Italia"
  },
  "serviceType": "Life Coaching",
  "provider": {
    "@type": "Person",
    "name": "Giorgia Cherubino",
    "jobTitle": "Life Coach Certificata",
    "email": "giorgiacherubinocoach@gmail.com",
    "url": "https://giorgiacherubinocoach.com",
    "image": "https://giorgiacherubinocoach.com/giorgia-profile.jpg",
    "sameAs": [
      "https://www.instagram.com/giorgia.cherubino",
    ]
  },
  "areaServed": "IT",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi di Life Coaching",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coaching Individuale",
          "description": "Percorso personalizzato 1:1 per trasformare la tua vita"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coaching di Gruppo",
          "description": "Crescita condivisa in piccoli gruppi selezionati"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Intensivo Obiettivi",
          "description": "Programma intensivo per raggiungere i tuoi obiettivi"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "10",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Martina"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Il percorso con Giorgia ha completamente trasformato la mia autostima. Grazie al suo metodo unico, ho imparato a valorizzare me stessa senza perdere la mia autenticità."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
