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
      title: "More Than a Factory... A Foundation for Bigger Opportunities.",
      subtitle: "A fully equipped industrial facility, ready for immediate operation, offering a prime location and versatile spaces suitable for purchase, leasing, or strategic investment partnerships.",
      cta: "Book a Site Visit",
    },
    aboutCard: {
      title: "Why This Factory?",
      body: "If you're looking for a facility that eliminates lengthy setup times and allows you to start operations immediately, this factory is the ideal choice. With its strategic location, practical layout, and turnkey readiness, it provides an excellent environment for a wide range of industrial operations and investment opportunities.",
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
      title: "Factory Location",
      items: [
        { name: "International Tower", image: "project-1" },
        { name: "Horizon Residences", image: "project-2" },
      ],
    },
    overview: {
      title: "Why It's a Great Investment",
      usps: [
        {
          title: "Available for Sale, Lease, or Investment Partnership",
        },
        {
          title: "Complete Legal Documentation",
        },
        {
          title: "Ready for Immediate Operation",
        },
        {
          title: "Employee Facilities",
        },
        {
          title: "Strategic Location",
          body: "Only 6 km from Abdoun Circle\nClose to 5B Mall",
        },
      ],
    },
    cta: {
      title: "Your Next Investment Starts Here.",
      body: "Whether you're looking to purchase, lease, or invest in a fully operational industrial facility, this property offers the location, space, and readiness to support your long-term success.",
      button: "Contact Us Today",
    },
    footer: {
      tagline: "Saqf Property Collective",
      rights: "All rights reserved.",
      projectBy: "Project by",
      phone: "+962 79 654 7704",
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
      title: "ليس مجرد مصنع… بل فرصة لمشروع أكبر",
      subtitle: "مصنع صناعي متكامل وجاهز للتشغيل، بموقع مميز ومساحات تناسب مختلف أنواع الاستثمار، سواء بالشراء أو التأجير أو الشراكة الاستثمارية",
      cta: "احجز معاينة الآن",
    },
    aboutCard: {
      title: "لماذا هذا المصنع؟",
      body: "إذا كنت تبحث عن مصنع جاهز يوفّر عليك وقت التجهيز، فهذا المصنع يقدّم بيئة مناسبة للبدء مباشرة. يجمع بين موقع مميز، ومساحات عملية، وجاهزية للتشغيل، مما يجعله مناسبًا لمختلف الأنشطة الصناعية والاستثمارية.",
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
      title: "موقع المصنع",
      items: [
        { name: "البرج الدولي", image: "project-1" },
        { name: "مساكن الأفق", image: "project-2" },
      ],
    },
    overview: {
      title: "لماذا يعتبر فرصة استثمارية؟",
      usps: [
        {
          title: "مناسب للبيع أو التأجير أو الشراكة الاستثمارية."
        },
        {
          title: "جميع الأوراق القانونية مكتملة.جميع الأوراق القانونية مكتملة"
        },
        {
          title: "جاهز للتشغيل والاستلام"
        },
        {
          title: "يحتوي على مرافق مخصصة للموظفين والعاملين."
        },
        {
          title: "يقع في موقع يسهل الوصول إليه",
          body: "قريب من التنظيم الصناعي .\nقريب من 5B Mall.\nيبعد 6 كم عن دوار عبدون.",
        },
      ],
    },
    cta: {
      title: "من هنا تبدأ فرصتك الاستثمارية.",
      body: "إذا كنت تبحث عن مصنع يجمع بين الموقع، والمساحة، والجاهزية، تواصل معنا لمعرفة المزيد أو لحجز موعد للمعاينة",
      button: "تواصل معنا الآن",
    },
    footer: {
      tagline: "سقف العقارية",
      rights: "جميع الحقوق محفوظة.",
      projectBy: "مشروع من",
      phone: "+962 79 654 7704",
    },
  },
} as const;

export type Translation = (typeof translations)[Lang];
