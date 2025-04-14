export default defineI18nConfig(() => ({
  legacy: false,
  locales: [
    { code: "en", language: "en-us", dir: "ltr" },
    { code: "fa", language: "fa", dir: "rtl" },
  ],
  messages: {
    en: {
      myName: "Sina Zare",
      underNameText: "can work with code!",
      headerText: "Independent Creative Developer with 3Y of Experience",
      projectsText: "Projects",
      resumeText: "Resume",
      contactText: "Contact",
    },
    fa: {
      myName: "سینا زارع",
      underNameText: "!میتونم با کد کار کنم",
      headerText: ".توسعه دهنده خلاق و مستقل",
      projectsText: "پروژه ها",
      resumeText: "رزومه",
      contactText: "تماس با من",
    },
  },
}));
