export type Lang = "en" | "ar";

export const translations = {
  en: {
    dir: "ltr" as const,
    nav: {
      home: "Home",
      about: "The Factory",
      specifications: "Specifications",
      investment: "Investment",
      contact: "Contact",
      getStarted: "Get in Touch",
    },
    hero: {
      title: "More Than a Factory... A Smart Investment Opportunity.",
      subtitle: "A fully operational industrial facility for sale, strategically located and designed to support your business growth from day one.",
      cta: "Contact Us",
    },
    aboutCard: {
      title: "Why This Factory?",
      body: "Invest in a fully operational industrial facility that saves you valuable time, reduces setup costs, and provides everything you need to start operating immediately. Combining a strategic location, well-planned spaces, and turnkey readiness, this factory is an ideal opportunity for investors and manufacturers seeking a high-value industrial asset with long-term growth potential.",
    },
    expertise: {
      title: "Factory Specifications",
      items: [
        {
          title: "Land Area",
          body: "1,384 m²",
        },
        {
          title: "Built-up Area",
          body: "3,989 m²",
        },
        {
          title: "Building Layout",
          body: "4 floors\nGround: 654 m²\nFirst Floor: 690 m²\nLower Ground Floor: 694 m²\nBasement: 1,270 m²",
        },
        {
          title: "Operational Status",
          body: "Ready for immediate operation and handover.",
        },
      ],
    },
    projects: {
      title: "Recent Projects",
      items: [
        { name: "International Tower", image: "project-1" },
        { name: "Horizon Residences", image: "project-2" },
      ],
    },
    overview: {
      title: "Why It's a Great Investment",
      usps: [
        {
          title: "Direct Sale from the Owner",
          body: "Purchase directly from the owner with no commissions or intermediary fees.",
        },
        {
          title: "Complete Legal Documentation",
          body: "All legal documents are in place and ready for a smooth ownership transfer.",
        },
        {
          title: "Ready for Immediate Operation",
          body: "Take possession and begin your operations without delays or additional preparation.",
        },
        {
          title: "Purpose-Built Facilities",
          body: "Designed to support industrial operations with dedicated staff facilities and infrastructure suitable for efficient production.",
        },
        {
          title: "Strategic Location",
          body: "Only 6 km from Abdoun Circle\nClose to 5B Mall\nNear the Industrial City\nEasy access to major transportation routes",
        },
      ],
    },
    cta: {
      title: "Your Next Investment Starts Here.",
      body: "Looking for an industrial facility that offers the perfect combination of location, space, and operational readiness? This is an opportunity built for long-term value and business growth.",
      button: "Get in Touch",
    },
    footer: {
      tagline: "Saqf Property Collective",
      rights: "All rights reserved.",
      projectBy: "Project by",
      email: "hello@saqf.com",
      phone: "+962796547704",
    },
  },
  ar: {
    dir: "rtl" as const,
    nav: {
      home: "الرئيسية",
      about: "المصنع",
      specifications: "المواصفات",
      investment: "الاستثمار",
      contact: "تواصل معنا",
      getStarted: "تواصل معنا الآن",
    },
    hero: {
      title: "ليس مجرد مصنع... بل فرصة استثمارية لأعمال أكبر.",
      subtitle: "مصنع صناعي متكامل للبيع، جاهز للتشغيل، بموقع استراتيجي ومساحات تدعم نمو أعمالك.",
      cta: "احجز معاينة الآن",
    },
    aboutCard: {
      title: "لماذا هذا المصنع؟",
      body: "استثمر في مصنع جاهز يختصر عليك الوقت والتكاليف، ويمنحك بيئة عمل متكاملة تدعم النمو منذ اليوم الأول.\nيجمع هذا المصنع بين الموقع الاستراتيجي، والمساحات المدروسة، وجاهزية التشغيل، ليكون خيارًا مثاليًا للمستثمرين وأصحاب المصانع الباحثين عن أصل صناعي جاهز يحقق قيمة طويلة الأمد.",
    },
    expertise: {
      title: "مواصفات المصنع",
      items: [
        {
          title: "مساحة الأرض",
          body: "1,384 م²",
        },
        {
          title: "المساحة البنائية",
          body: "3,989 م²",
        },
        {
          title: "عدد الطوابق",
          body: "4 طوابق\nأرضي: 654 م²\nأول: 690 م²\nتسوية: 694 م²\nقبو: 1,270 م²",
        },
        {
          title: "الجاهزية",
          body: "جاهز للتشغيل والاستلام الفوري.",
        },
      ],
    },
    projects: {
      title: "أحدث المشاريع",
      items: [
        { name: "البرج الدولي", image: "project-1" },
        { name: "مساكن الأفق", image: "project-2" },
      ],
    },
    overview: {
      title: "لماذا يعتبر فرصة استثمارية؟",
      usps: [
        {
          title: "بيع مباشر من المالك",
          body: "بدون أي عمولات أو وسطاء.",
        },
        {
          title: "جميع الأوراق القانونية مكتملة",
          body: "جاهزة لنقل الملكية.",
        },
        {
          title: "جاهز للتشغيل",
          body: "استلم وابدأ أعمالك مباشرة.",
        },
        {
          title: "المرافق والخدمات",
          body: "مرافق مخصصة للموظفين والعاملين، مع بنية مناسبة للتشغيل.",
        },
        {
          title: "موقع استراتيجي",
          body: "يبعد 6 كم عن دوار عبدون.\nقريب من 5B Mall.\nقريب من المدينة الصناعية.",
        },
      ],
    },
    cta: {
      title: "من هنا تبدأ فرصتك الاستثمارية.",
      body: "هل تبحث عن مصنع يجمع بين الموقع، والمساحة، والجاهزية؟",
      button: "تواصل معنا الآن",
    },
    footer: {
      tagline: "سقف العقارية",
      rights: "جميع الحقوق محفوظة.",
      projectBy: "مشروع من",
      email: "hello@saqf.com",
      phone: "+962796547704",
    },
  },
} as const;

export type Translation = (typeof translations)[Lang];
