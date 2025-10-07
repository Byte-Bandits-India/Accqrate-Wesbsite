├── public/
│   ├── favicon.ico              # Main favicon
│   ├── apple-touch-icon.png     # Icon for iOS devices (shortcut)
│   ├── android-chrome-192x192.png      # website (shortcut)
│   ├── android-chrome-512x512.png      # website (shortcut)
│   │
│   ├── robots.txt               # SEO: Allow/block crawlers
│   ├── sitemap.xml              # SEO: Generated sitemap for all pages
│   │
│   ├── images/                  # Marketing images, product screenshots
│   │   ├── home/                # Home page assets
│   │   ├── e-invoicing/         # E-invoicing module assets
│   │   ├── buisness-solutions/  # Buisness Solutions module assets
│   │   │   ├── retail/
│   │   │   ├── books/
│   │   │   ├── crm/
│   │   │   ├── factory/
│   │   │   ├── people/
│   │   │   └── one/
│   │   │   
│   │   ├── resources/           # Blogs, webinars, FAQs
│   │   ├── about-us/            # Team photos, culture images
│   │   └── success-stories/     # Case study logos, testimonials
│   │
│   ├── logos/                   # Company logos, partner logos
│   │   ├── company-logo.svg
│   │   ├── partners/            # Logos of partner companies, clients, or integrations.
│   │   └── certifications/      # Display certification badges or trust marks (ISO, compliance, industry awards).
│   │
├── src/
│   ├── app/
│   │   ├── pages/                  # Route group for marketing/public pages
│   │   │   ├── page.tsx            # Home page
│   │   │   ├── e-invoicing/        # Module: E-Invoicing
│   │   │   │   ├── software/       # Subpage: /e-invoicing/software
│   │   │   │   ├── integration/    # Subpage: /e-invoicing/integration
│   │   │   │   ├── cloud/          # Subpage: /e-invoicing/cloud
│   │   │   │   └── on-premises/    # Subpage: /e-invoicing/on-premises
│   │   │   │
│   │   │   ├── business-solutions/ # Module: Buisness Solutions
│   │   │   │   ├── books/          # Submodule: Books
│   │   │   │   │   ├── page.tsx    # Overview
│   │   │   │   │   └── sections/
│   │   │   │   │       ├── hero.tsx    # Section: Hero
│   │   │   │   │       ├── section1.tsx
│   │   │   │   │       ├── section2.tsx
│   │   │   │   │       └── ...
│   │   │   │   ├── retail/         # Submodule: Retail
│   │   │   │   │   ├── page.tsx    # Overview
│   │   │   │   │   └── sections/
│   │   │   │   │       ├── hero.tsx    # Section: Hero
│   │   │   │   │       ├── section1.tsx
│   │   │   │   │       ├── section2.tsx
│   │   │   │   │       └── ...
│   │   │   │   ├── crm/            # Submodule: CRM
│   │   │   │   │   ├── page.tsx    # Overview
│   │   │   │   │   └── sections/
│   │   │   │   │       ├── hero.tsx    # Section: Hero
│   │   │   │   │       ├── section1.tsx
│   │   │   │   │       ├── section2.tsx
│   │   │   │   │       └── ...
│   │   │   │   ├── factory/        # Submodule: Factory
│   │   │   │   │   ├── page.tsx    # Overview
│   │   │   │   │   └── sections/
│   │   │   │   │       ├── hero.tsx    # Section: Hero
│   │   │   │   │       ├── section1.tsx
│   │   │   │   │       ├── section2.tsx
│   │   │   │   │       └── ...
│   │   │   │   ├── people/         # Submodule: People
│   │   │   │   │   ├── page.tsx    # Overview
│   │   │   │   │   └── sections/
│   │   │   │   │       ├── hero.tsx    # Section: Hero
│   │   │   │   │       ├── section1.tsx
│   │   │   │   │       ├── section2.tsx
│   │   │   │   │       └── ...
│   │   │   │   └── one/            # Submodule: One
│   │   │   │       ├── page.tsx    # Overview
│   │   │   │       └── sections/
│   │   │   │           ├── hero.tsx    # Section: Hero
│   │   │   │           ├── section1.tsx
│   │   │   │           ├── section2.tsx
│   │   │   │           └── ...
│   │   │   │
│   │   │   ├── resources/          # Module: Resources
│   │   │   │   ├── page.tsx        # Resources overview
│   │   │   │   ├── blogs/          # Blog listing + [slug] pages
│   │   │   │   ├── webinars/
│   │   │   │   ├── announcements/
│   │   │   │   ├── faqs/
│   │   │   │   └── vat-calculator/
│   │   │   │
│   │   │   ├── about-us/           # About Us page
│   │   │   ├── success-stories/    # Success Stories page
│   │   │   └── layout.tsx          # Layout for marketing pages
│   │   │
│   ├── styles/
│   │   └── globals.css             # Tailwind + global styles
│   │
│   ├── components/                 # Shared UI components
│   │   ├── ui/                     # Buttons, Inputs, Cards, Typography
│   │   ├── layout/                 # Navbar, Footer, Header, SEO
│   │   └── sections/               # Reusable sections (Hero, Features, CTA)
│   │
│   ├── lib/                        # Utilities
│   │   ├── seo.ts                  # SEO helpers (meta, OG tags)
│   │   ├── analytics.ts            # Analytics (GA, GTM, etc.)
│   │   └── utils.ts                # General helpers
│   │
│   └── config/                     # Centralized configs
│       ├── site.config.ts          # Site-wide metadata (title, social links)
│       ├── navigation.ts           # Navbar + footer menus
│       └── seo.config.ts           # Default SEO settings
│
├── .prettierrc
├── eslint.config.js
├── tailwind.config.ts
├── next.config.js
│── package.json
├── postcss.config.js
├── components.json
└── tsconfig.json