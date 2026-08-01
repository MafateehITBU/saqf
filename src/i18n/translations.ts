export type Lang = "en" | "ar";

export const translations = {
  en: {
    dir: "ltr" as const,
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      about: "About Us",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      title: "Elevating Modern Infrastructure",
      subtitle: "Engineering Excellence · Innovative Solutions",
      cta: "Learn More",
    },
    aboutCard: {
      title: "About Us",
      body: "Saqf Property Collective delivers exceptional architectural and engineering solutions. We combine craftsmanship, innovation, and precision to shape spaces that endure.",
    },
    expertise: {
      title: "Our Expertise",
      items: [
        {
          title: "Advanced Engineering",
          body: "Precision-driven structural and technical solutions for complex builds.",
        },
        {
          title: "Construction Management",
          body: "End-to-end oversight ensuring quality, timeline, and budget control.",
        },
        {
          title: "Sustainable Design",
          body: "Environmentally conscious planning for lasting, efficient spaces.",
        },
        {
          title: "Project Consulting",
          body: "Strategic guidance from concept through completion and delivery.",
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
      title: "Company Overview",
      body: "With a commitment to excellence, Saqf partners with industry leaders to deliver landmark developments. Our multidisciplinary team brings vision, rigor, and refined execution to every project.",
      stats: [
        { value: "+15", label: "Years Serving Industry Leaders" },
        { value: "+350", label: "Completed Projects" },
        { value: "+80", label: "Skilled Team Members" },
      ],
    },
    footer: {
      tagline: "Saqf Property Collective",
      rights: "All rights reserved.",
      projectBy: "Project by",
      email: "hello@saqf.com",
      phone: "+966 11 000 0000",
    },
  },
  ar: {
    dir: "rtl" as const,
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      services: "الخدمات",
      about: "من نحن",
      contact: "تواصل معنا",
      getStarted: "ابدأ الآن",
    },
    hero: {
      title: "نرتقي بالبنية التحتية الحديثة",
      subtitle: "تميز هندسي · حلول مبتكرة",
      cta: "اعرف المزيد",
    },
    aboutCard: {
      title: "من نحن",
      body: "تقدّم سقف حلولًا معمارية وهندسية استثنائية. نجمع بين الحرفة والابتكار والدقة لصناعة مساحات تدوم.",
    },
    expertise: {
      title: "خبراتنا",
      items: [
        {
          title: "هندسة متقدمة",
          body: "حلول إنشائية وتقنية دقيقة للمشاريع المعقدة.",
        },
        {
          title: "إدارة الإنشاءات",
          body: "إشراف شامل يضمن الجودة والجدول والميزانية.",
        },
        {
          title: "تصميم مستدام",
          body: "تخطيط واعٍ بيئيًا لمساحات فعّالة ودائمة.",
        },
        {
          title: "استشارات المشاريع",
          body: "توجيه استراتيجي من الفكرة حتى التسليم.",
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
      title: "نظرة عامة على الشركة",
      body: "بالتزامنا بالتميز، تشارك سقف قادة القطاع لتنفيذ مشاريع بارزة. يجمع فريقنا متعدد التخصصات بين الرؤية والدقة والتنفيذ الراقي في كل مشروع.",
      stats: [
        { value: "+15", label: "عامًا في خدمة قادة القطاع" },
        { value: "+350", label: "مشروعًا منجزًا" },
        { value: "+80", label: "عضو فريق متخصص" },
      ],
    },
    footer: {
      tagline: "سقف العقارية",
      rights: "جميع الحقوق محفوظة.",
      projectBy: "مشروع من",
      email: "hello@saqf.com",
      phone: "+966 11 000 0000",
    },
  },
} as const;

export type Translation = (typeof translations)[Lang];
